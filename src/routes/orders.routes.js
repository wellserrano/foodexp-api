const { Router } = require("express");

const ordersRoutes = Router();

const OrdersControllers = require('../controllers/OrdersController')
const ordersControllers = new OrdersControllers();

ordersRoutes.get("/", ordersControllers.index);
ordersRoutes.get("/details", ordersControllers.fetchDetails);

ordersRoutes.put("/", ordersControllers.update);
ordersRoutes.post("/", ordersControllers.create);

module.exports = ordersRoutes;