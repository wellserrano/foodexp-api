const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class CheckoutController {
  async index(req, res) {
    const { products } = req.query 
   
      const result = await Promise.all(products.map( async product => {
        
        const response = await knex("products")
          .select("id", "name", "image", "price")
          .where('id', product.product_id)
          .first()

        return {quantity: Number(product.quantity), ...response}
      }))

    return res.status(200).json(result)
  }


}

module.exports = CheckoutController;