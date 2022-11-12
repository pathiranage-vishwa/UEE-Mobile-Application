const Join = require("../models/joinEventModel");

//create join event
const createJoinEvent = async (req, res) => {
  try {
    const {
      eventId,
      eventName,
      eventDate,
      eventLocation,
      name,
      community,
      description,
      image,
      status,
    } = req.body;
    const joinEvent = await Join.create({
      eventId,
      eventName,
      eventDate,
      eventLocation,
      name,
      community,
      description,
      image,
      status,
    });
    res.status(201).json(joinEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all join events
const getAllJoinEvents = async (req, res) => {
  try {
    const joinEvents = await Join.find({});
    res.status(200).json(joinEvents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get join event by status
const getJoinEventByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const joinEvent = await Join.find({ status });
    if (joinEvent) {
      return res.status(200).json(joinEvent);
    }
    res.status(404).send("Join Event not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete join event
const deleteJoinEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Join.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Join Event deleted");
    }
    throw new Error("Join Event not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//update join event status
const updateJoinEventStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Join.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, joinEvent) => {
        if (err) {
          res.status(500).json({ message: err.message });
        }
        if (!joinEvent) {
          res.status(404).json({ message: "Join Event not found" });
        }
        return res.status(200).json(joinEvent);
      }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createJoinEvent,
  getAllJoinEvents,
  getJoinEventByStatus,
  deleteJoinEvent,
  updateJoinEventStatus,
};
