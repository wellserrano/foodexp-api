const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class FavoritesController {
  async create(req, res) {
    console.log('agagagas')

    return res.status(200).json()
  }
}

module.exports = FavoritesController;