const ShareEvent = require("../models/eventModel");

//create share Event
const createShareEvent = async (req, res) => {
    try {
        const {
            eventName,
            eventCaption,
            postDate,
            uploadImage,
        } = req.body;
        const event = await ShareEvent.create({
            eventName,
            eventCaption,
            postDate,
            uploadImage,
        });
        res.status(201).json({ event });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//get all share Event
const getAllShareEvents = async (req, res) => {
    try {
        const events = await ShareEvent.find({});
        res.status(200).json({ events });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//get event by id
const getShareEventById = async (req, res) => {
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
