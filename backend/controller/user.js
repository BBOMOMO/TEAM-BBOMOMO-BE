const { User, StudyTime, sequelize } = require("../models");
const Sequelize = require("sequelize");
const { Op } = Sequelize;

function timeSet() {
  // 1. 현재 날짜정보, 오늘 타임스탬프, 오늘 요일 출력
  const now = new Date();
  const nowTimestamp = now.getTime();
  const nowDay = now.getDay();
  const dayToMs = 24 * 60 * 60 * 1000;

  // 2. 금주 월요일과 어제의 timestamp 출력.
  const [mondayStamp, yesterdayStamp] = [
    nowTimestamp - nowDay * dayToMs,
    nowTimestamp - dayToMs,
  ];

  // 3. 현재시각, 년, 월, 오늘날짜, 어제날짜, 금주 월요일 날짜를 출력.
  const [currentTime, year, month, today, yesterday, monday] = [
    now.getHours(),
    now.getFullYear(),
    `0${now.getMonth() + 1}`.slice(-2),
    `0${now.getDate()}`.slice(-2),
    `0${new Date(yesterdayStamp).getDate()}`.slice(-2),
    `0${new Date(mondayStamp).getDate()}`.slice(-2),
  ];

  let weekStart = `${year}-${month}-${monday}T00:00:00.000Z`;
  let todayStart;
  currentTime < 9
    ? (todayStart = `${year}-${month}-${yesterday}T00:00:00.000Z`)
    : (todayStart = `${year}-${month}-${today}T00:00:00.000Z`);

  return { todayStart, weekStart };
}

async function checkUserInfo(req, res) {
  const { userId } = res.locals.user;
  const { todayStart } = timeSet();
  try {
    const userInfo = await User.findOne({
      where: { userId: userId },
      attributes: { exclude: ["password"] },
    });
    const studyRecord = await StudyTime.findOne({
      where: { userId: userId },
      attributes: [[sequelize.fn("sum", sequelize.col("studyTime")), "total"]],
    });
    const todayRecord = await StudyTime.findOne({
      where: {
        userId: userId,
        createdAt: {
          [Op.gte]: todayStart,
        },
      },
      attributes: [[sequelize.fn("sum", sequelize.col("studyTime")), "today"]],
    });
    return res.status(200).send({
      user: userInfo,
      totalRecord: studyRecord,
      todayRecord: todayRecord,
    });
  } catch (err) {
    return res.status(400).send({
      msg: "요청한 데이터 형식이 올바르지 않습니다.",
    });
  }
}

async function updateUserInfo(req, res) {
  const { userId } = res.locals.user;
  const { category, nick } = req.body;
  try {
    await User.update({ nick, category }, { where: { userId: userId } });
    return res.status(201).send({ msg: "회원정보 수정완료!" });
  } catch (err) {
    return res.status(400).send({
      msg: "이미 존재하는 닉네임 또는 요청하는 데이터 형식이 올바르지 않습니다.",
    });
  }
}

async function updateUserStatus(req, res) {
  const { userId } = res.locals.user;
  const { statusMsg } = req.body;
  try {
    await User.update({ statusMsg: statusMsg }, { where: { userId } });
    return res.status(201).send({ msg: "상태메시지 수정완료!" });
  } catch (err) {
    return res.status(400).send({
      msg: "요청한 상태메시지 형식이 올바르지 않습니다.",
    });
  }
}

async function updateUserImg(req, res) {
  const { userId } = res.locals.user;
  const profileImg = req.file.location;
  try {
    await User.update({ profileImg: profileImg }, { where: { userId } });
    return res.status(201).json({ msg: "프로필 이미지 수정완료!" });
  } catch (err) {
    return res.status(400).send({
      msg: "요청한 프로필 이미지 형식이 올바르지 않습니다.",
    });
  }
}

async function showRanking(req, res) {
  const { weekStart } = timeSet();
  try {
    const studyRanking = await StudyTime.findAll({
      where: {
        createdAt: {
          [Op.gte]: weekStart,
        },
      },
      attributes: [
        "userId",
        [sequelize.fn("SUM", sequelize.col("studyTime")), "weeklyRecord"],
      ],
      include: [
        {
          model: User,
          as: "User",
          attributes: ["nick", "category"],
        },
      ],
      group: ["userId"],
      order: [
        [sequelize.fn("SUM", sequelize.col("studyTime")), "DESC"],
        ["userId", "DESC"],
      ],
      limit: 20,
    });
    return res.status(200).send({
      studyRanking,
    });
  } catch (err) {
    return res.status(400).send({
      msg: "요청한 데이터 형식이 올바르지 않습니다.",
    });
  }
}

module.exports = {
  checkUserInfo,
  updateUserInfo,
  updateUserStatus,
  updateUserImg,
  showRanking,
};
