const { Router } = require("express");

const checkoutRoutes = Router();

const CheckoutControllers = require('../controllers/CheckoutController')
const checkoutControllers = new CheckoutControllers();

checkoutRoutes.get("/", checkoutControllers.index)

module.exports = checkoutRoutes;