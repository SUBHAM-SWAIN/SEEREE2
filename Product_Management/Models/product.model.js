const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProdName: {
    type: String,
    required: true,
  },
  ProdDescription: {
    type: String,
    required: true,
  },
  ProdPrice: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
