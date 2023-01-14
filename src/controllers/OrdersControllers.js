const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class OrdersControllers {
  async create(req, res) {
    console.log(req.body)
    return res.json()
  }


}

module.exports = OrdersControllers;