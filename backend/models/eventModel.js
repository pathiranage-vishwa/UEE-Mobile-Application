const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
    trim: true,
  },
  eventDescription: {
    type: String,
    required: true,
    trim: true,
  },
  eventDate: {
    type: String,
    required: true,
    trim: true,
  },
  eventTime: {
    type: String,
    required: true,
    trim: true,
  },
  eventLocation: {
    type: String,
    required: true,
    trim: true,
  },
  eventImage: {
    type: String,
    required: true,
    trim: true,
  },
  eventCategory: {
    type: String,
    required: true,
    trim: true,
  },
  eventGoal: {
    type: String,
    required: true,
    trim: true,
  },
  eventStatus: {
    type: String,
    required: true,
    trim: true,
    default: "Pending",
  },
});

const Event = mongoose.model("events", EventSchema);
module.exports = Event;
