const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    order_id: 5,
    order_page: "order get",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    product_id: req.body.product_id,
    quantity: req.body.quantity,
  };
  res.status(200).json({
    message: "order was created",
    order_data: order,
  });
});

module.exports = router;
