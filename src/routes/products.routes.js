const { Router } = require('express');

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const productsRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const ProductsController = require('../controllers/ProductsController')
const productsController = new ProductsController();

productsRoutes.post("/", upload.single("image"), productsController.create);

module.exports = productsRoutes;