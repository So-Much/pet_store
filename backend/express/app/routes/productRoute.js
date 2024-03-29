const router = require('express').Router();
const productController = require('../controllers/productController')

// ROUTE : []: api/product
router.get('/category', productController.getAllCategories)
router.post('/create', productController.createProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)
router.get('/:id', productController.getProduct)
router.get('/', productController.getAllProducts)


module.exports = router