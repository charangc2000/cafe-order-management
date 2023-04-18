const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "item name should be required"],
  },
  type: {
    type: String,
    required: [true, "item type should be required"],
  },
  price: {
    type: Number,
    required: [true, "price should be required"],
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
