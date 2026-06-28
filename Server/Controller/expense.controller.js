const expenseModel = require("../Model/expense.model");
const getDateRange = require("../Utils/dateFilter");

const addExpense = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const { description, amount, date, category } = req.body;

    if (!description || !amount || !date || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newExpense = await expenseModel.create({
      usersId: UserId,
      description,
      amount,
      category,

      date: new Date(date),
    });

    return res.status(201).json({
      success: true,
      message: "Expense Added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
      error: error.message,
    });
  }
};

const getAllExpense = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const getAllExpense = await expenseModel
      .find({ usersId: UserId })
      .sort({ date: -1 });

    return res.status(200).json({
      success: true,
      message: "Expense Fetched Successfully",
      expense: getAllExpense,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};

const updateExpense = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const id = req.params.id;
    const { amount, description } = req.body;

    const foundExpenseAndUpdateIt = await expenseModel.findOneAndUpdate(
      { _id: id, usersId: UserId },
      { amount, description },
      { new: true },
    );

    if (!foundExpenseAndUpdateIt) {
      return res.status(404).json({
        message: "Expense Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Expense Updated Successfully",
      expense: foundExpenseAndUpdateIt,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};
const deleteExpense = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const deleteExpense = await expenseModel.findOneAndDelete({
      _id: req.params.id,
      usersId: UserId,
    });
    if (!deleteExpense) {
      return res.status(404).json({
        success: false,
        message: "Expense Not Found",
      });
    }
    return res.status(200).json({
      message: "Expense Deleted Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};

const expenseOverview = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const { range = "monthly" } = req.query;

    const { start, end } = getDateRange(range);

    const expenses = await expenseModel
      .find({
        usersId: UserId,
        date: { $gte: start, $lte: end },
      })
      .sort({ date: -1 });

    const totalExpense = expenses.reduce((acc, cur) => acc + cur.amount, 0);
    const averageExpense =
      expenses.length > 0 ? totalExpense / expenses.length : 0;
    const numberOfTransaction = expenses.length;
    const recentTransaction = expenses.slice(0, 5);

    return res.status(200).json({
      success: true,
      data: {
        totalExpense,
        averageExpense,
        numberOfTransaction,
        recentTransaction,
        range,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};

module.exports = {
  expenseOverview,
  addExpense,
  deleteExpense,
  updateExpense,
  getAllExpense,
};
