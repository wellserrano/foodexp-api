const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class OrdersController {
  async create(req, res) {
    const { user_id, total, items } = req.body
    return res.json()
  }


}

module.exports = OrdersController;