const { Router } = require("express")

const dishesRoutes = Router();

const DishesController = require('../controllers/DishesController')
const dishesController = new DishesController();

dishesRoutes.get('/', dishesController.index);
dishesRoutes.get('/search', dishesController.search);

module.exports = dishesRoutes;