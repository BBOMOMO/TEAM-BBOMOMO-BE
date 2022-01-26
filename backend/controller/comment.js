const { Comment } = require("../models");

// post Comment
async function postComment(req, res) {
  const { userId } = res.locals.user;
  const { postId } = req.params;
  const { comment } = req.body;
  try {
    await Comment.create({
      postId,
      comment,
      userId,
    });
    return res.status(201).send({
      msg: "댓글 작성 성공",
    });
  } catch (err) {
    return res.status(400).send({ msg: "댓글 작성 실패" });
  }
}

//update Comment
async function updateComment(req, res) {
  try {
    const { comment } = req.body;
    const { postId, commentId } = req.params;
    await Comment.update({ comment }, { where: { postId, commentId } });
    return res.status(201).send({
      msg: "댓글 수정 완료",
    });
  } catch (err) {
    return res.status(400).send({ msg: "댓글 수정 실패" });
  }
}

//delete Comment
async function deleteComment(req, res) {
  try {
    const { postId, commentId } = req.params;
    await Comment.destroy({ where: { postId, commentId } });
    return res.status(201).send({
      msg: "댓글 삭제 완료",
    });
  } catch (err) {
    return res.status(400).send({ msg: "댓글 삭제 실패" });
  }
}

module.exports = { postComment, deleteComment, updateComment };
