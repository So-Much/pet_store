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
    }
}