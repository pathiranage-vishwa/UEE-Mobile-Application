const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  caption: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const Share = mongoose.model("shares", shareSchema);
module.exports = Share;
