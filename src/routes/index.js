const { Router } = require("express");

const routes = Router();

const statusRouter = require("./status.routes")
const sessionsRouter = require("./sessions.routes")

const usersRouter = require("./users.routes")
const ordersRouter = require("./orders.routes")
const productsRouter = require("./products.routes")
const ingredientsRouter = require("./ingredients.routes");

const dishesRouter = require("./dishes.routes");
const checkoutRoutes = require("./checkout.routes");
const favoritesRoutes = require("./favorites.routes");

routes.use("/status", statusRouter);
routes.use("/sessions", sessionsRouter);

routes.use("/users", usersRouter);
routes.use("/orders", ordersRouter);
routes.use("/products", productsRouter);
routes.use("/ingredients", ingredientsRouter);

routes.use("/dishes", dishesRouter);
routes.use("/checkout", checkoutRoutes);
routes.use("/favorites", favoritesRoutes);



module.exports= routes;