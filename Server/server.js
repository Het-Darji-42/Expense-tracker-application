    const express = require("express");
    const app = require("./app");
    const dotenv = require("dotenv").config();
    const connectToDb = require("./Config/db");
    const PORT = process.env.PORT;

    connectToDb();

    app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
    });
