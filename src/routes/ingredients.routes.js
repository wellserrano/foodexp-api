const { Router } = require('express');

const ingredientsRoutes = Router();

const IngredientsController = require('../controllers/IngredientsController')
const ingredientsController = new IngredientsController();

ingredientsRoutes.post("/", ingredientsController.create);

module.exports = ingredientsRoutes;