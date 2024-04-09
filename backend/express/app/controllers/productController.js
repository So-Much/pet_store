const { response } = require("express");
const Product = require("../models/Product");

const serverHost = 'http://localhost:8000/'

module.exports = {
  // ROUTE : [GET]: api/product/page
  pagination: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    try {
      const products = await Product.find()
      .skip(skipIndex)
      .limit(limit);

      const totalCount = await Product.countDocuments();
      res.json({
        products,
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalProducts: totalCount
      })
    } catch (error) {
      
    }
  },
  // ROUTE : [GET]: api/product/images/:id
  getImages : async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product.images);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
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
      res.status(201).json(product);
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
      const newProduct = new Product({
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
  // ROUTE : [DELETE]: api/product/selectedProducts
  deleteProducts : async (req, res) => {
    try {
      const products = await Product.deleteMany({_id: {$in: req.body.products}})
      res.status(200).json(products)
    } catch (error) {
      console.log(error);
      return res.status(404).json({message: error.message});
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
  },
  // ROUTE : [POST]: api/product/images/:id
  uploadImages : async (req, res) => {
    try {
      // console.log(req.file);
      // console.log("uploadImages");
      const images = req.files.map((file) => serverHost+file.originalname)
      // console.log("🚀 ~ uploadImages: ~ images:", images)
      // console.log("uploadImages done");
      // console.log(req.files);
      const product = await Product.findById(req.params.id);
      product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  uploadImage : async (req, res) => {
    try {
      console.log(req.file);
    } catch (error) {
      console.log(error);
    }
  }

};

