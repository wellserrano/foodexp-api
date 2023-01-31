const { Router } = require("express");

const checkoutRoutes = Router();

const CheckoutControllers = require('../controllers/CheckoutController')
const checkoutControllers = new CheckoutControllers();

checkoutRoutes.get("/", checkoutControllers.index)
checkoutRoutes.post("/", checkoutControllers.create)

module.exports = checkoutRoutes;