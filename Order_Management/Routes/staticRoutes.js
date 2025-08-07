const express = require("express");
const staticRouter = express.Router();
const Order = require("../Models/OrderMaster");

staticRouter.get("/", (req, res) => {
  return res.send("Order Management Service is running");
});
staticRouter.get("/order", async (req, res) => {
  const orders = await Order.find();
  return res.render("order", { orders });
});
staticRouter.get("/recept", (req, res) => {
  return res.render("recept");
});

staticRouter.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);

  res.render("edit",{order});
});

module.exports = staticRouter;
