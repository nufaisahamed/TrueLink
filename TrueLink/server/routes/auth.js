const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const verifyToken = require("../middleware/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/adminlogin", authController.adminLogin);
router.get("/me", verifyToken, authController.getProfile);
router.delete("/logout", authController.logout);

module.exports = router;
