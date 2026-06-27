const express = require("express");
const { Register, Login, UserProfile } = require("../Controller/user.controller");
const userMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/profile", userMiddleware , UserProfile)

module.exports = router;
    