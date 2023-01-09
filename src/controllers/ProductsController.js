const knex = require("../database/knex")
const AppError = require("../utils/AppError")

const DiskStorage = require("../providers/DiskStorage");

class ProductsController {
  async create(req, res) {
    const { name, price, description, image } = req.body.productData

    console.log('productsData', req.body.productData)

    const product_id = await knex("products")
      .insert({
        name,
        price,
        image,
        description,
      })

    return res.status(201).json(product_id)
    
  }
}

module.exports = ProductsController;