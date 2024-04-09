const { authencationToken } = require('../services/jwtServices');
const { USER_ROLES } = require('../utils/Constant');
const cartController = require('../controllers/cartController');

const router = require('express').Router();

// ROUTE : api/cart
router.get('/', authencationToken([...USER_ROLES.ALL]), cartController.getCart);

module.exports = router;