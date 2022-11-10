const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/dataBase");
const colors = require("colors");

//import routes
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const requestRoutes = require("./routes/requestRoutes");
const mDonationRoutes = require("./routes/mDonationRouter");
const pDonationRoutes = require("./routes/pDonationRouter");

//config
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

//connect to database
connectDB();

//default route
app.get("/", (req, res) => {
  res.send("Welcome to the procurement system");
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/moneyDonations", mDonationRoutes);
app.use("/api/plantDonations", pDonationRoutes);

//listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);

//export app
module.exports = app;
