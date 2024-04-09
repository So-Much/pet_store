const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const User = new Schema({
  googleId: {
    type: String,
  },
  avatar: {
    type: String,
    default:
      "https://i.pinimg.com/564x/b1/13/a0/b113a01118e0286ce985ee01543422aa.jpg",
  },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  spending: { type: Number, default: 0 },
  cart_id: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  orders_id: [
    {
      order_id: { type: mongoose.SchemaTypes.ObjectId },
    },
  ],
  // Roles = ["Customer", "Staff", "Manager", "Admin"]
  role: { type: String, enum: ["CUSTOMER", "STAFF", "MANAGER", "ADMIN"] },
});

module.exports = mongoose.model("User", User);
