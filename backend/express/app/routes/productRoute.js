const router = require('express').Router();
const productController = require('../controllers/productController')

// ROUTE : []: api/product
router.post('/create', productController.createProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)
router.get('/', productController.getAllProducts)


module.exports = router