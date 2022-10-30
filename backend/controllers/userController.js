const User = require("../models/user");

//create user
const createUser = async (req, res) => {
  try {
    const { userId, name, email, password, role } = req.body;
    const user = await User.create({
      userId,
      name,
      email,
      password,
      role,
    });
    res.status(201).json({ user });
  } catch (err) {
    console.log(err);
  }
};

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.status(200).json({ user });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.status(400).json({ message: "Invalid email" });
    }
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({ user });
    }
    res.status(404).send("User not found");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
};
