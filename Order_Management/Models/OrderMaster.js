const mongoose = require("mongoose");

const OrderMasterSchema = new mongoose.Schema({
  orderDate: {
    type: String,
    required: true,
  },
  prodName: {
    type: String,
    required: true,
  },
  prodId: {
    type: String,
    required: true,
  },
  orderQty: {
    type: Number,
    required: true,
  },
  orderValue: {
    type: Number,
    required: true,
  },
});

const Order_Master = mongoose.model("Order_Master", OrderMasterSchema);

module.exports = Order_Master;
