const Event = require("../models/eventModel");

//create event
const createEvent = async (req, res) => {
  try {
    const {
      title,
      category,
      location,
      date,
      time,
      description,
      goal,
      image,
      status,
      participants,
    } = req.body;
    const event = await Event.create({
      title,
      category,
      location,
      date,
      time,
      description,
      goal,
      image,
      status,
      participants,
    });
    res.status(201).json({ event });
  } catch (err) {
    res.status(500).json({ message: err.message });
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
      title,
      category,
      location,
      date,
      time,
      description,
      goal,
      image,
      status,
      participants,
    } = req.body;
    const event = await Event.findByIdAndUpdate(
      id,
      {
        title,
        category,
        location,
        date,
        time,
        description,
        goal,
        image,
        status,
        participants,
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

//get by event status
const getEventByStatus = async (req, res) => {
  try {
    const newStatus = "completed";
    const event = await Event.find({ status: newStatus });
    if (event) {
      return res.status(200).json({ event });
    }
    res.status(404).send("Event not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update event status
const updateEventStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const event = await Event.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );
    res.status(200).json({ event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update event participants
const updateEventParticipants = async (req, res) => {
  try {
    const { id } = req.params;
    //increment participants by 1
    const event = await Event.findByIdAndUpdate(
      id,
      {
        $inc: { participants: 1 },
      },
      { new: true }
    );
    res.status(200).json({ event });
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
  getEventByStatus,
  updateEventStatus,
  updateEventParticipants,
};
