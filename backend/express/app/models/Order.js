const mongoose = require("mongoose");
const {ORDER_STATUS} = require('../utils/Constant')

module.exports = mongoose.model(
  "Order",
  new mongoose.Schema({
    carts: [{ 
        cart_id: { type: mongoose.SchemaTypes.ObjectId },
        order_status: {
            type: String,
            enum: [...Object.keys(ORDER_STATUS)],
            default: ORDER_STATUS.PENDING
        }
     }],
  })
);