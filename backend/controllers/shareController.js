const Share = require("../models/shareModel");

//create share
const createShare = async (req, res) => {
  try {
    const { name, caption, date, image } = req.body;
    const share = await Share.create({
      name,
      caption,
      date,
      image,
    });
    res.status(201).json(share);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all shares
const getAllShares = async (req, res) => {
  try {
    const shares = await Share.find({});
    res.status(200).json(shares);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createShare,
  getAllShares,
};
