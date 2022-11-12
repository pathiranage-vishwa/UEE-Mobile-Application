const mongoose = require("mongoose");

const JoinEventSchema = new mongoose.Schema({
  eventId: {
    //get event id from event model
    type: mongoose.Schema.Types.ObjectId,
    ref: "events",
    required: true,
  },
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  eventDate: {
    type: String,
    required: true,
    trim: true,
  },
  eventLocation: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  community: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
    default: "pending",
  },
});

const JoinEvent = mongoose.model("joinEvents", JoinEventSchema);
module.exports = JoinEvent;

//sample eventJoin data json
