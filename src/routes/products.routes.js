const { Router } = require('express');

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const productsRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const ProductsController = require('../controllers/ProductsController')
const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);
productsRoutes.put("/", productsController.update);
productsRoutes.post("/", productsController.create);
productsRoutes.post("/image", upload.single("image"), productsController.saveImage);
productsRoutes.delete("/", productsController.delete);

module.exports = productsRoutes;