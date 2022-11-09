const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.post("/login", userController.login);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/forgetpassword", userController.forgetPassword);
router.post("/resetpassword/:token", userController.resetPassword);

module.exports = router;
