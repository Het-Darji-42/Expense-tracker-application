const express = require("express");
const userMiddleware = require("../Middleware/auth.middleware");
const getDashboardOverview = require("../Controller/dashboard.controller");
const router = express.Router();

router.get("/", userMiddleware, getDashboardOverview);

module.exports = router