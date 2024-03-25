const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ROUTE : []: api/user
router.put('/:id', userController.updateUser);
// router.post('/update/:id', upload.single('avatar'), userController.uploadAvatar)
router.delete('/:id', userController.deleteUser);
router.post('/create', userController.createUser);
router.get('/', userController.getAllUsers);

module.exports = router;
