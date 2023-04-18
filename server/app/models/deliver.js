const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const deliverSchema = new Schema({
  name: {
    type: String,
    required: [true, "name should be required"],
  },
  orderId: {
    type: Schema.Types.ObjectId,
    required: [true, "should be required"],
    ref: "Order",
  },
});

const Deliver = mongoose.model("Deliver", deliverSchema);

module.exports = Deliver;
