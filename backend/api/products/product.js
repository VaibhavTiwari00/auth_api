const express = require("express");

const  router = express.Router();

const mongoose = require("mongoose");
const Product = require("../models/product");

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then((docs) => {
      if (docs.length > 0) {
        console.log(docs);
        res.json(docs); 
      } else {
        res.status(404).json({ error: "no Entries Found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  product
    .save()
    .then((response) => {
      console.log(response);
      res.status(200).json({
        page_data: product,
        message: "created successfully",
      });
    })
    .catch((err) => console.log(err));
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((product) => {
      if (product) {
        console.log("database response" + product);
        res.status(200).json({ product });
      } else {
        res.status(500).json({ error: "novalid id provided" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ error: "novalid id provided" });
    });
});

router.delete("/:productId", (req, res) => {
  const id = req.params.productId;
  Product.deleteOne({ _id: id })
    .exec()
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(500).json({ error: "Deleted is not working" }));
});

router.patch("/:productId", (req, res) => {
  const id = req.params.productId;
  const updateOps = {};

  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.updateOne(
    { _id: id },
    {
      $set: updateOps ,
    }
  )
    .exec()
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(500).json({ error: "Deleted is not working" }));
});
module.exports = router;
