const mongoose = require("mongoose");

let connectDB = (URI) => {
  mongoose.connect(URI).then(() => {
    console.log("connected to MongoDB");
  });
};

module.exports = connectDB;
