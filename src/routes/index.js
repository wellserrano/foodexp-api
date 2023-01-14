const { Router } = require("express");

const routes = Router();

const statusRouter = require("./status.routes")
const sessionsRouter = require("./sessions.routes")

const usersRouter = require("./users.routes")
const ordersRouter = require("./orders.routes")
const productsRouter = require("./products.routes")
const ingredientsRouter = require("./ingredients.routes")

routes.use("/status", statusRouter);
routes.use("/sessions", sessionsRouter);

routes.use("/users", usersRouter);
routes.use("/orders", ordersRouter);
routes.use("/products", productsRouter);
routes.use("/ingredients", ingredientsRouter);



module.exports= routes;