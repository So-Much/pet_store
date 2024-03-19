const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const multer = require('multer');

const JWTMiddleware = require('../middlewares/JWTMiddleware');

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
router.put('/:id', userController.updateUser);
// router.post('/update/:id', upload.single('avatar'), userController.uploadAvatar)
router.delete('/:id', userController.deleteUser);
router.post('/create',JWTMiddleware.authorization('Admin'), userController.createUser);
router.get('/', userController.getAllUsers);

module.exports = router;
