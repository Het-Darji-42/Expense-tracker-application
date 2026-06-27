const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes= require("./Routes/user.route")

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", userRoutes);

    // app.use("/", (req, res) => {
    //   res.send("yes, working");
    // });

module.exports = app;
