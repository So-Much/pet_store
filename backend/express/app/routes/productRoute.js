const multer = require("multer");
const path = require("path");

const router = require("express").Router();
const productController = require("../controllers/productController");
const { authencationToken } = require("../services/jwtServices");
const { USER_ROLES } = require("../utils/Constant");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("file", file);
    const targetPath = path.join(__dirname, "../uploads");
    cb(null, targetPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).array("images", 10);

// features routes
// ROUTE : []: api/product
router.get(
  "/page",
  authencationToken([...USER_ROLES.PERMISSIONS_LIMIT_PRODUCTS]),
  productController.pagination
);
router.post(
  "/images/:id",
  authencationToken([...USER_ROLES.PERMISSIONS_LIMIT_PRODUCTS]),
  upload,
  productController.uploadImages
);

// default routes
// ROUTE : []: api/product
router.delete(
  "/selectedProducts",
  authencationToken([...USER_ROLES.PERMISSIONS_LIMIT_PRODUCTS]),
  productController.deleteProducts
);
router.get("/category", productController.getAllCategories);
router.post(
  "/create",
  authencationToken([...USER_ROLES.PERMISSIONS_LIMIT_PRODUCTS]),
  productController.createProduct
);
router.delete(
  "/:id",
  authencationToken([...USER_ROLES.PERMISSIONS_LIMIT_PRODUCTS]),
  productController.deleteProduct
);
router.put(
  "/:id",
  authencationToken([...USER_ROLES.PERMISSIONS_LIMIT_PRODUCTS]),
  productController.updateProduct
);
router.get("/:id", productController.getProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
