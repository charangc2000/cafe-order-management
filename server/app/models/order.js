const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
    required: [true, "name should be required"],
  },
  itemId: {
    type: Schema.Types.ObjectId,
    required: [true, "itemId is required"],
    ref: "Item",
  },
  price: {
    type: Number,
    required: [true, "price should be required"],
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
