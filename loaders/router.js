const indexRouter = require("../api/routes/index");
const tagsRouter = require("../api/routes/tags");

module.exports = function (app) {
    app.use("/", indexRouter);
    app.use("/tags", tagsRouter);
};
