const express = require("express");
const router = express.Router();
const shareController = require("../controllers/shareController");

router.post("/", shareController.createShare);
router.get("/", shareController.getAllShares);

module.exports = router;
