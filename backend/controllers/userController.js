const User = require("../models/user");
const bcrypt = require("bcrypt");

//create user
const createUser = async (req, res) => {
  try {
    const { name, email, contactNo, password, role } =
      req.body;

    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ msg: "The email already exists." });

    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password is at least 6 characters long." });

    // Password Encryption
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      contactNo,
      password: passwordHash,
      role,
    });

    // Save mongodb
    await newUser.save();

    res.json({ newUser });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });
    
    res.json({ user });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
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

//forget password
const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      const url = `http://localhost:3000/reset-password/${token}`;
      res.status(200).json({ url });
    } else {
      res.status(400).json({ message: "Invalid email" });
    }
  } catch (err) {
    console.log(err);
  }
};

//reset password
const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      user.password = password;
      await user.save();
      res.status(200).json({ message: "Password updated successfully" });
    } else {
      res.status(400).json({ message: "Invalid token" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
  forgetPassword,
  resetPassword,
};
