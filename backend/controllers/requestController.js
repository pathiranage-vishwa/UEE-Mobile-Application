const Request = require("../models/requestModel");

//create event
const createRequest = async (req, res) => {
  try {
    const {
      title,
      category,
      location,
      description,
      image,
    } = req.body;
    const request = await Request.create({
        title,
        category,
        location,
        description,
        image,
    });
    res.status(201).json({ request });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all requests
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find({});
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get event request id
const getRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Request.findById(id);
    if (request) {
      return res.status(200).json({ request });
    }
    res.status(404).send("Request not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update event
const updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      category,
      location,
      description,
      image,
    } = req.body;
    const request = await Request.findByIdAndUpdate(
      id,
      {
        title,
        category,
        location,
        description,
        image,
      },
      { new: true }
    );
    res.status(200).json({ request });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete event
const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Request.findByIdAndDelete(id);
    if (request) {
      return res.status(200).json({ message: "Request deleted" });
    }
    res.status(404).send("Request not found");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    createRequest,
    getAllRequests,
    getRequestById,
    updateRequest,
    deleteRequest,
  };
  