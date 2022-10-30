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
    console.log(err);
  }
};

module.exports = {
  createEvent,
};
