const Cart = require("../models/Cart");

module.exports = {
  // ROUTE : [GET] : api/cart
  getCart: async (req, res, next) => {
    try {
      const cart = req.user.cart_id;
      const cart_item = await Cart.findById(cart);
      res.status(201).json(cart_item);
    } catch (error) {
      res.status(401).json(error);
    }
  },
  // ROUTE : [GET] : api/cart/preview
  getCartWith3Items: async (req, res, next) => {
    try {
      const cartID = req.user.cart_id;
      const cart = await Cart.findById(cartID)
        .populate({ path: "products", options: { limit: 3 } })
        .exec();
      res.status(200).json(cart);
    } catch (error) {
      res.status(401).json(error);
    }
  },
  // ROUTE : [POST] : api/cart/add
  addToCart: async (req, res, next) => {
    try {
      const cartID = req.user.cart_id;
      const { product_id, quantity } = req.body;
      const cart = await Cart.findByIdAndUpdate(cartID, {
        $push: {
          products: {
            product: product_id,
            quantity: quantity,
          },
        },
      });
      res.status(201).json(cart);
    } catch (error) {
      res.status(401).json(error);
    }
  },
};
