const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.post("/", eventController.createEvent);
router.get("/status", eventController.getEventByStatus);
router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getEventById);
router.put("/update/:id", eventController.updateEventStatus);
router.put("/participants/:id", eventController.updateEventParticipants);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
