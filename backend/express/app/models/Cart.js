const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Cart",
  new mongoose.Schema({
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
    ship_fee: {
      type: Number,
      default: 0,
    },
  })
);
