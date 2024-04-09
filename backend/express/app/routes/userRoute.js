const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authencationToken } = require("../services/jwtServices");

const { USER_ROLES } = require("../utils/Constant");


// ROUTE : []: api/user

router.get('/current', authencationToken([...USER_ROLES.ALL]), (req, res, next) => {
  const { password, ...userWithoutPass } = req.user;
  res.status(200).json(userWithoutPass);
})

router.put(
  "/:id",
  authencationToken([...USER_ROLES.ALL]),
  userController.updateUser
);
// router.post('/update/:id', upload.single('avatar'), userController.uploadAvatar)
router.delete(
  "/:id",
  authencationToken([USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  userController.deleteUser
);
router.post(
  "/create",
  (req, res, next) => {
    const user_create_role = req.body.role;
    console.log(user_create_role);
    if (user_create_role === USER_ROLES.ADMIN && user_create_role === USER_ROLES.MANAGER) {
      return authencationToken([USER_ROLES.ADMIN])(req, res, next);
    } else if (user_create_role === USER_ROLES.STAFF) {
        return authencationToken([USER_ROLES.ADMIN, USER_ROLES.MANAGER])(req, res, next);
    } else {
        return next();
    }
  },
  userController.createUser
);
router.get(
  "/",
  authencationToken([USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  userController.getAllUsers
);

module.exports = router;
