const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

// ROUTE : []: api/user
router.put('/update/:id', upload.single('avatar'), userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.post('/create', userController.createUser);
router.get('/', userController.getAllUsers);

module.exports = router;
