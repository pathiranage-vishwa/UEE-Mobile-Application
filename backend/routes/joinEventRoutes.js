const express = require("express");
const router = express.Router();
const joinEventController = require("../controllers/joinEventController");

router.post("/", joinEventController.createJoinEvent);
router.get("/status", joinEventController.getJoinEventByStatus);
router.get("/", joinEventController.getAllJoinEvents);
router.delete("/:id", joinEventController.deleteJoinEvent);
router.put("/update/:id", joinEventController.updateJoinEventStatus);

module.exports = router;
