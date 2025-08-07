const mongoose = require("mongoose");
const ProductMaster = require("../Models/ProductMaster");

exports.insertData = async (req, res) => {
  const { prodName, prodQty, prodRate } = req.body;
  let data = await ProductMaster.insertOne({
    prodName,
    prodQty,
    prodRate,
  });
  if (data) {
    return res.json({ message: "Data inserted successfully" });
  }
};

exports.fetchData = async (req, res) => {
  const { prodName } = req.params;
  let data = await ProductMaster.findOne({ prodName });
  if (data) {
    return res.json(data);
  } else {
    return;
  }
};
