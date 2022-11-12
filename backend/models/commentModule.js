const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  feedId: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
});

const Comment = mongoose.model("comments", CommentSchema);
module.exports = Comment;
