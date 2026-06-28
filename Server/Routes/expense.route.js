const express = require("express");
const {
  addExpense,
  getAllExpense,
  updateExpense,
  deleteExpense,
  expenseOverview,
} = require("../Controller/expense.controller");
const userMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/add", userMiddleware, addExpense);
router.get("/get", userMiddleware, getAllExpense);
router.put("/update/:id", userMiddleware, updateExpense);
router.delete("/delete/:id", userMiddleware, deleteExpense);
router.get("/overview", userMiddleware, expenseOverview);

module.exports = router;
