  const express = require("express");
  const cors = require("cors");
  const app = express();
  const userRoutes = require("./Routes/user.route");
  const incomeRoutes = require("./Routes/income.route");
  const expenseRoutes = require("./Routes/expense.route");
  const dahsboardRoutes = require("./Routes/dashboard.route");

  app.use(cors());
  app.use(express.json());

  app.use("/api/v1/auth", userRoutes);
  app.use("/api/v2/income", incomeRoutes);
  app.use("/api/v2/expense", expenseRoutes);
  app.use("/api/v2/dashboard", dahsboardRoutes);

  app.use("/", (req, res) => {
    res.send("yes, working");
  });

  module.exports = app;
