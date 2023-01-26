const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class FavoritesController {
  async index(req, res) {
    const { id: user_id } = req.query
    
    const data = await knex
      .select('favorites.id as favorite_id', 'products.*')
      .from('favorites')
      .join('products', 'favorites.product_id', 'products.id')
      .where({ user_id })

    return res.json(data)
  }

  async create(req, res) {
    const { favoriteInfo } = req.body

    const data = await knex("favorites")
      .insert(favoriteInfo)

    return res.status(200).json(data[0])
  }

  async toggleFavorite(req, res) {
    const id = req.query.id

    await knex("favorites")
      .where({ id })
      .del()

    return res.status(200).json()
  }
}

module.exports = FavoritesController;