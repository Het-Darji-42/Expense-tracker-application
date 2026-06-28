const express = require("express");
const {
  addIncome,
  getIncome,
  updateIncome,
  IncomeDelete,
  incomeOverview,
} = require("../Controller/income.controller");
const userMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/add", userMiddleware, addIncome);
router.get("/get", userMiddleware, getIncome);
router.put("/update/:id", userMiddleware, updateIncome);
router.delete("/delete/:id", userMiddleware, IncomeDelete);
router.get("/overview", userMiddleware, incomeOverview);

module.exports = router;
