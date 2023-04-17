const express = require("express");
const path = require("path");
const loaders = require("./loaders");
require("dotenv").config();

const start = () => {
    const app = express();
    const port = process.env.SERVER_PORT;

    // view engine setup
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    // middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "public")));

    app.listen(port, () => {
        console.log(`[server]: Server is running at <https://localhost>:${port}`);
    });

    loaders(app);
};

// start server
start();

module.exports = start;
