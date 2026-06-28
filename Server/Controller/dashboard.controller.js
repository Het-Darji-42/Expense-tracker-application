const expenseModel = require("../Model/expense.model");
const incomeModel = require("../Model/income.model");

const getDashboardOverview = async (req, res) => {
  try {
    const UserId = req.user.userId;
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const incomes = await incomeModel
      .find({
        usersId: UserId,
        date: { $gte: startOfMonth, $lte: now },
      })
      .lean();

    const expenses = await expenseModel
      .find({
        usersId: UserId,
        date: { $gte: startOfMonth, $lte: now },
      })
      .lean();

    const monthlyIncome = incomes.reduce(
      (acc, cur) => acc + Number(cur.amount || 0),
      0,
    );
    const monthlyExpense = expenses.reduce(
      (acc, cur) => acc + Number(cur.amount || 0),
      0,
    );
    const savings = monthlyIncome - monthlyExpense;
    const savingsRate =
      monthlyIncome === 0 ? 0 : Math.round((savings / monthlyIncome) * 100);

    const recentTransactions = [
      ...incomes.map((i) => ({ ...i, type: "income" })),
      ...expenses.map((e) => ({ ...e, type: "expense" })),
    ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const spendByCategory = {};
    for (const exp of expenses) {
      const cat = exp.category || "Other";
      spendByCategory[cat] =
        (spendByCategory[cat] || 0) + Number(exp.amount || 0);
    }

    // object into array
    const expenseDistribution = Object.entries(spendByCategory).map(
      ([category, amount]) => ({
        category,
        amount,
        percent:
          monthlyExpense === 0
            ? 0
            : Math.round((amount / monthlyExpense) * 100),
      }),
    ); // for chart

    return res.status(200).json({
      success: true,
      data: {
        success: true,
        monthlyIncome,
        monthlyExpense,
        savings,
        savingsRate,
        recentTransactions,
        spendByCategory,
        expenseDistribution,
      },
    });
  } catch (error) {
    console.error("Dashboaard Overview Error", error);
    return res.status(500).json({
      message: "Server side error",
      error: error.message,
    });
  }
};

module.exports = getDashboardOverview
