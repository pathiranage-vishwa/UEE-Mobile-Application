const Comment = require("../models/commentModule");

//create comment
const createComment = async (req, res) => {
  try {
    const { feedId, name, comment } = req.body;
    const commentNew = await Comment.create({
      feedId,
      name,
      comment,
    });
    res.status(201).json(commentNew);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get comment by feed id
const getCommentByFeedId = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.find({ feedId: id });
    if (comment) {
      return res.status(200).json(comment);
    }
    res.status(404).send("Comment not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentByFeedId,
};
