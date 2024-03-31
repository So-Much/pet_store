const Product = require("../models/Product");

module.exports = {
  // ROUTE : [GET]: api/product
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // ROUTE : [GET] api/product/:id
  getProduct : async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // ROUTE : [POST]: api/product/create
  createProduct: async (req, res) => {
    try {
      const {
        name,
        price,
        description,
        category,
        quantity,
        sale,
        rating,
        brand,
        unit,
      } = req.body;
      //   const images = req.files.length < 2 ? req.file.path :req.files?.map((file) => file.path);
      const newProduct = new Product({
        // images,
        name,
        price,
        description,
        category,
        quantity,
        sale,
        rating,
        brand,
        unit,
      });
      const product = await newProduct.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // ROUTE : [PUT]: api/product/:id
  updateProduct: async (req, res) => {
    try {
      const newProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  // ROUTE : [DELETE]: api/product/update/:id
  deleteProduct: async (req, res) => {
    try {
      const delProducted = await Product.findByIdAndDelete(req.params.id);
      res.status(201).json(delProducted);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  // ROUTE : [GET]: api/product/category
  getAllCategories: async (req, res) => {
    try {
      const categories = await Product.distinct('category')
      res.json(categories)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

