const Order = require("../Models/OrderMaster");
exports.placeOrder = async (req, res) => {
  const { prodName, prodId, orderQty, orderValue, prodRate } = req.body;
  const newOrder = Order.create({
    orderDate: new Date().toDateString(),
    prodName,
    prodId,
    orderQty,
    orderValue,
  });
  if (newOrder) {
    return res.render("recept", {
      message: "Order placed successfully",
      orderDetails: {
        orderDate: new Date().toDateString(),
        prodName,
        prodId,
        prodRate,
        orderQty,
        orderValue,
      },
    });
  } else {
    res.status(500).json({
      message: "Failed to place order",
    });
  }
};

//Delete order

exports.deleteOrder = async (req, res) => {
  const id = req.params.id;
  let order = await Order.findByIdAndDelete(id);
  if (order) {
    return res.redirect("/order");
  }
};

exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  const { orderQty, orderValue } = req.body;
  const orderDetails = await Order.findByIdAndUpdate(
    id,
    { orderQty, orderValue },
    { new: true }
  );
  orderDetails.prodRate = orderDetails.orderValue / orderDetails.orderQty;
  console.log(orderDetails);
  return res.render("recept", { orderDetails });
};
