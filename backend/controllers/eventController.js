const Event = require("../models/eventModel");

//create event
const createEvent = async (req, res) => {
  try {
    const {
      eventTitle,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation,
      eventImage,
      eventCategory,
      eventGoal,
      eventStatus,
    } = req.body;
    const event = await Event.create({
      eventTitle,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation,
      eventImage,
      eventCategory,
      eventGoal,
      eventStatus,
    });
    res.status(201).json({ event });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json({ events });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get event by id

module.exports = {
  createEvent,
  getAllEvents,
};
