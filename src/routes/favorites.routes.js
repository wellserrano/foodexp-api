const { Router } = require("express");

const favoritesRoutes = Router();

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController();

favoritesRoutes.get("/", favoritesController.index);
favoritesRoutes.post("/", favoritesController.create);
favoritesRoutes.delete("/", favoritesController.toggleFavorite);

module.exports = favoritesRoutes;