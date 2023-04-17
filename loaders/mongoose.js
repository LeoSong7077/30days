const mongoose = require("mongoose");

module.exports = async function () {
    const connection = mongoose.connect(process.env.SERVER_DB_URL, {
        dbName: process.env.SERVER_DB_NAME,
        useNewUrlParser: true,
        autoIndex: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB Intialized");
};
