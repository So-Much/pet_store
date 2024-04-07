const multer = require('multer');
const path = require('path');


const router = require('express').Router();
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log('file', file);
      const targetPath = path.join( __dirname,'../uploads');
      cb(null, targetPath);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  })

  const upload = multer({storage}).array('images', 10);

// features routes
// ROUTE : []: api/product
router.get('/page', productController.pagination)
router.post('/images/:id', upload , productController.uploadImages)

// default routes
// ROUTE : []: api/product
router.get('/category', productController.getAllCategories)
router.post('/create', productController.createProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)
router.get('/:id', productController.getProduct)
router.get('/', productController.getAllProducts)




module.exports = router