const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class DishesController {
  async index(req, res) {
    const { category, user_id } = req.query;

    const data = await knex
      .select('products.*', 'favorites.id as favorite_id')
      .from('products')
      .leftJoin('favorites', function() {
        this.on('products.id', '=', 'favorites.product_id')
        .andOn('favorites.user_id', '=', knex.raw('?', [user_id]))
      })
      .where({'products.category': knex.raw('?', [category])})

    return res.status(200).json(data)
  }

  async search(req, res) {
    const { like } = req.query
    
    const data = await knex
      .select('products.*')
      .from("products")
      .join("ingredients", 'products.id', 'ingredients.product_id')
      .whereLike('products.name', `%${like}%`)
      .orWhereLike('ingredients.name', `%${like}%`)

    return res.json(data)
  }
}

module.exports = DishesController;