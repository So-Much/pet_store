const User = require("../models/User");
const bcrypt = require("bcrypt");
const { USER_ROLES } = require("../utils/Constant");
const Cart = require("../models/Cart");

module.exports = {
  // ROUTE : [GET]: api/user
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // ROUTE : [POST]: api/user/create
  createUser: async (req, res) => {
    console.log(req.body);
    try {
      const { email } = req.body;
      const isExisted = await User.findOne({ email: email });
      if (isExisted) {
        return res.status(400).json({ message: "Email already existed" });
      }

      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) {
          res.status(err.statusCode).json({ message: err.message });
        } else {
          const cartNew = await new Cart({});
          const cartSave = await cartNew.save();
          const uNew = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber || "",
            role: req.body.role || USER_ROLES.CUSTOMER,
            cart_id: cartSave._id
          });
          const uSaved = await uNew.save();
          res.status(201).json(uSaved);
        }
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // ROUTE : [PUT]: api/user/update/:id
  updateUser: async (req, res) => {
    try {
      const uUpdated = await User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.status(201).json(uUpdated);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // // ROUTE : [POST]: api/user/update/:id
  // uploadAvatar : async (req, res) => {
  //   try {
  //     console.log(req.file);
  //     const imagePath = req.file.path;
  //     const image = User.findByIdAndUpdate(req.params.id,{'avatar': imagePath})
  //     await image.save();
  //     res.status(200).send("Image uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     res.status(500).send("Error uploading image.");
  //   }
  // },
  
  // ROUTE : [DELETE]: api/user/delete/:id
  deleteUser: async (req, res) => {
    try {
      const uDeleted = await User.findByIdAndDelete(req.params.id);
      res.status(201).json(uDeleted);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
};
