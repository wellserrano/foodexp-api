const { Router } = require("express");

const favoritesRoutes = Router();

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController();

favoritesRoutes.post("/", favoritesController.create);
favoritesRoutes.delete("/", favoritesController.toggleFavorite);

module.exports = favoritesRoutes;