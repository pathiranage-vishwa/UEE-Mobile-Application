const express = require("express");
const router = express.Router();
const shareEventController = require("../controllers/shareEventController");

router.post("/", ShareEventController.createShareEvent);
router.get("/", shareEventController.getAllShareEvents);
router.get("/:id", shareEventController.getShareEventById);

module.exports = router;