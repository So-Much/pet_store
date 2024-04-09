const { authencationToken } = require("../services/jwtServices");
const { USER_ROLES } = require("../utils/Constant");
const orderController = require("../controllers/orderController");

const router = require("express").Router();

router.get("/:id", authencationToken([...USER_ROLES.ALL]), orderController.getOrder);
router.post("/:id", authencationToken([...USER_ROLES.ALL]), orderController.createOrder);

module.exports = router;