const { Router } = require('express');

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const productsRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const ProductsController = require('../controllers/ProductsController')
const productsController = new ProductsController();

productsRoutes.post("/", productsController.create);
productsRoutes.post("/image", upload.single("image"), productsController.saveImage);

module.exports = productsRoutes;