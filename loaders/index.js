const authLoader = require("./auth");
const mongooseLoader = require("./mongoose");
const routerLoader = require("./router");
const errorLoader = require("./error");

module.exports = function (app) {
    mongooseLoader();
    routerLoader(app);
    errorLoader(app);
};
