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
const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (event) {
      return res.status(200).json({ event });
    }
    res.status(404).send("Event not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update event
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
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
    const event = await Event.findByIdAndUpdate(
      id,
      {
        eventTitle,
        eventDescription,
        eventDate,
        eventTime,
        eventLocation,
        eventImage,
        eventCategory,
        eventGoal,
        eventStatus,
      },
      { new: true }
    );
    res.status(200).json({ event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete event
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (event) {
      return res.status(200).json({ message: "Event deleted" });
    }
    res.status(404).send("Event not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
