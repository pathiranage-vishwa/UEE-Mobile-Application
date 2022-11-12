const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  contactNo: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/dlprhahi4/image/upload/v1665683554/610-6104451_image-placeholder-png-user-profile-placeholder-image-png_dy0qvb.jpg",
  },
  role: {
    type: String,
    default: "Non-Community Member",
  },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
