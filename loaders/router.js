const indexRouter = require("../api/routes/index");

module.exports = function (app) {
    app.use("/", indexRouter);
};
