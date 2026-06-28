const incomeModel = require("../Model/income.model");
const getDateRange = require("../Utils/dateFilter");

const addIncome = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const { description, amount, date, category } = req.body;

    // I will handle it from frontend ( Reac-Hook_Lib) - but here for more security
    // also can add in auth, but will handle in frontend; dont worry
    if (!description || !amount || !date || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newIncome = await incomeModel.create({
      usersId: UserId,
      description,
      amount,
      category,

      date: new Date(date),
    });

    return res.status(201).json({
      success: true,
      message: "Income Added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};

const getIncome = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const getAllIncome = await incomeModel
      .find({ usersId: UserId })
      .sort({ date: -1 }); // newest to oldest

    return res.status(200).json({
      success: true,
      message: "Income Fetched Successfully",
      incomes: getAllIncome,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};

const updateIncome = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const incomeId = req.params.id;
    const { amount, description } = req.body;

    const foundIncomeAndUpdateIt = await incomeModel.findOneAndUpdate(
      { _id: incomeId, usersId: UserId },
      { amount, description },
      { new: true },
    );

    if (!foundIncomeAndUpdateIt) {
      return res.status(404).json({
        message: "Income Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Income Updated Successfully",
      income: foundIncomeAndUpdateIt,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};

const IncomeDelete = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const deleteIncome = await incomeModel.findOneAndDelete({
      _id: req.params.id,
      usersId: UserId,
    });
    if (!deleteIncome) {
      return res.status(404).json({
        success: false,
        message: "Income Not Found",
      });
    }
    return res.status(200).json({
      message: "Income Deleted Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server side error ",
      success: false,
    });
  }
};

const incomeOverview = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const { range = "monthly" } = req.query;

    const { start, end } = getDateRange(range);

    const incomes = await incomeModel
      .find({
        usersId: UserId,
        date: { $gte: start, $lte: end },
      })
      .sort({ date: -1 });

    const totalIncome = incomes.reduce((acc, cur) => acc + cur.amount, 0);
    const averageIncome = incomes.length > 0 ? totalIncome / incomes.length : 0;
    const numberOfTransaction = incomes.length;
    const recentTransaction = incomes.slice(0, 9); // latest 9 transactions

    return res.status(200).json({
      success: true,
      data: {
        totalIncome,
        averageIncome,
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
  addIncome,
  getIncome,
  updateIncome,
  IncomeDelete,
  incomeOverview,
};
