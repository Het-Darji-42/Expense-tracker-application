const mongoose = require("mongoose");
const incomeSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    usersId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      default: "Income",
    },
  },
  { timestamps: true },
);

const incomeModel = mongoose.model("income", incomeSchema);
module.exports = incomeModel;
