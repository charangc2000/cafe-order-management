const mongoose = require("mongoose");

const configureDb = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://127.0.0.1:27017/take-home2023")
    .then(() => {
      console.log("dont worry your db successfully connected");
    })
    .catch(() => {
      console.log("something went wrong in your db");
    });
};

module.exports = configureDb;
