const express = require("express");
const dynamicRoute = express.Router();
const productController = require("../Controllers/Product.controller");
const orderController = require("../Controllers/Order.controller");

dynamicRoute.post("/insertData", productController.insertData);
dynamicRoute.get("/fetchData/:prodName", productController.fetchData);
dynamicRoute.post("/placeOrder", orderController.placeOrder);
dynamicRoute.post("/update/:id", orderController.updateOrder);
dynamicRoute.get("/delete/:id", orderController.deleteOrder);

module.exports = dynamicRoute;
