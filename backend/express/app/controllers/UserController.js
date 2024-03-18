const User = require("../models/User");
const bcrypt = require("bcrypt");

const userController = {
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
    // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
    // Số vòng lặp để tạo salt (10 là mức đề xuất)
    // Tạo một đối tượng người dùng với mật khẩu đã được hash
    try {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) {
          console.log(err);
        } else {
          const uNew = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
          });
          const uSaved = await uNew.save();
          res.status(201).json(uSaved);
        }
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // ROUTE : [POST]: api/user/update/:id
  updateUser: async (req, res) => {
    try {
      // const avatarPath = req.file.path
      console.log(req.file);
      const uUpdated = await User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.status(201).json(uUpdated);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // ROUTE : [POST]: api/user/delete/:id
  deleteUser: async (req, res) => {
    try {
      const uDeleted = await User.findByIdAndDelete(req.params.id);
      res.status(201).json(uDeleted);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userController;
