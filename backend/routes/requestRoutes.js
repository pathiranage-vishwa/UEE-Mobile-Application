const express = require("express");
const router = express.Router();
const requestController = require("../controllers/requestController");

router.post("/", requestController.createRequest);
router.get("/all", requestController.getAllRequests);
router.get("/:id", requestController.getRequestById);
router.put("/update/:id", requestController.updateRequest);
router.delete("/:id", requestController.deleteRequest);

module.exports = router;
