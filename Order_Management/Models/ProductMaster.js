const mongoose = require("mongoose");

const ProductMasterSchema = new mongoose.Schema({
  prodName: {
    type: String,
    required: true,
    unique: true,
  },
  prodRate: {
    type: Number,
    required: true,
  },
  prodQty: {
    type: Number,
    required: true,
  },
});

const ProductMaster = mongoose.model('ProductMaster',ProductMasterSchema);

module.exports = ProductMaster;
