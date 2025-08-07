const mongoose = require("mongoose");

async function connectDB(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB" + err.message);
    });
}

module.exports = connectDB;
