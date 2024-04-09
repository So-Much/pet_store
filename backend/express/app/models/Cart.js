const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Cart",
  new mongoose.Schema({
    totals: {
      type: Number,
      default: 0,
    },
    products: [
      {
        product: {
          type: mongoose.SchemaTypes.ObjectId,
        },
        quantity: {
          type: Number,
          default: 0,
        },
      },
    ],
    fee: {
      type: Number,
      default: 0,
    },
  })
);
