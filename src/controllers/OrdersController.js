const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class OrdersController {
  async create(req, res) {
    
    const { order_id, items } = req.body;

    const itemsInsert = items.map(item => {
      return {
        order_id,
        product_id: item.product_id,
        quantity: item.quantity,
      }
    });

    await knex("order_items")
      .insert(itemsInsert)


    return res.status(201).json()
  }


}

module.exports = OrdersController;