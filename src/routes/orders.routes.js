const { Router } = require("express");

const ordersRoutes = Router();

const OrdersControllers = require('../controllers/OrdersController')
const ordersControllers = new OrdersControllers();

ordersRoutes.post("/", ordersControllers.create)

module.exports = ordersRoutes;