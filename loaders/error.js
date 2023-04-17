const createError = require("http-errors");

module.exports = function (app) {
    const errorMiddleware = (type) => (req, res, next) => {
        next(createError(type));
    };
    // const errorMiddleware = (type: string): ErrorMiddleWare => {
    //     return function(req, res, next) {
    //         next(createError(type));
    //     }
    // }

    const errorHandler = (err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};
        res.status(err.status || 500);
        res.render("error");
    };

    app.use(errorMiddleware("404"));
    app.use(errorHandler);
};
