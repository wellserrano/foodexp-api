const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class DishesController {
  async index(req, res) {
    const { category } = req.query;

    const data = await knex('products').where({ category });
    return res.status(200).json(data)
  }
}

module.exports = DishesController;