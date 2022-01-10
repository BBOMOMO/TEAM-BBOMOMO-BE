const authRouter = require("./auth");
const userRouter = require("./user");
const postRouter = require("./post");
const studyRoomRouter = require("./studyRoom");
const studyRouter = require("./studyTimer");

const router = require("express").Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/studyRoom", studyRoomRouter);
router.use("/study", studyRouter);

module.exports = router;
