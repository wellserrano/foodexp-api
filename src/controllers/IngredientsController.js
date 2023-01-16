const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class IngredientsController {

  async create(req, res) {
    const { product_id, ingredients } = req.body

    const ingredientsInsert = ingredients.map(ingredient => {
        return {
          product_id,
          name: ingredient
        }
      }
    )

    await knex("ingredients")
      .insert(ingredientsInsert);

    return res.status(201).json()
    
  }
}

module.exports = IngredientsController;