const { Router } = require("express");

const favoritesRoutes = Router();

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController();

favoritesRoutes.use("/", favoritesController.create);

module.exports = favoritesRoutes;