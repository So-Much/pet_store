const User = require('../models/User');

const userController = {
    // ROUTE : GET: api/user
    getAllUsers : async (req, res) => {
        try {
          const users = await User.find();
          res.json(users);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },
    // ROUTE : POST: api/user/create
    createUser : async (req, res) => {
        const user = new User(req.body);
        console.log(req.body);
        try {
            const saved = await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
}

module.exports = userController;