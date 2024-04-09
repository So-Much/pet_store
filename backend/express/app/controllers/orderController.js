const Order = require("../models/Order");
const User = require("../models/User");

module.exports = {
    // ROUTE : [GET] : api/order/:id
    getOrder : async (req, res, next) => {
        try {
            const order = await Order.findById(req.params.id)
            res.status(200).json(order);
        } catch (error) {
            res.status(401).json(error);
        }
    },
    // ROUTE : [POST] : api/order
    createOrder : async (req, res, next) => {
        try {
            const {
                ...orderfields
              } = req.body;
              console.log(orderfields);
              const order = new Order({
                orderfields
              })
              const orderSaved = order.save();
              const user_ordered = User.findByIdAndUpdate(req.user._id, {
                orders_id: [
                    ...(req.user.orders_id),
                    orderSaved._id
                ]
              })
              res.status(201).json(user_ordered);
        } catch (error) {
            
        }
    }
}