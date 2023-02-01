const knex = require("../database/knex");
const AppError = require("../utils/AppError");

const dayjs = require('dayjs')

class OrdersController {

  async index(req, res) {
    const { id: user_id } = req.query

    const today = dayjs();
    const oneYearAgo = today.subtract(1, 'year').toISOString();

    const data = await knex("orders")
      .where({ user_id })
      .where('created_at', '>=', oneYearAgo)

    const detailedOrders = await knex
      .select('orders.id', 'order_items.quantity','products.name')
      .from('orders')
      .join('order_items', 'orders.id', 'order_items.order_id')
      .join('products', 'order_items.product_id', 'products.id')
      .where({'orders.user_id': user_id })

      const formattedDetails = [];
      
      detailedOrders.forEach(item => {
      const orderIndex = formattedDetails.findIndex(o => o.order_id === item.id);
      if (orderIndex === -1) {
        formattedDetails.push({ order_id: item.id, details: `${item.quantity}x ${item.name}` });
      } else {
        formattedDetails[orderIndex].details += `, ${item.quantity}x ${item.name}`;
      }
    });

    const formattedData = data.map(item => {
      const filledId = String(item.id).padStart(8, '0')
      
      const date = dayjs(item.created_at)

      let detailment = '';

      formattedDetails.forEach(detail => {
        if (item.id === detail.order_id) {
          detailment = detail.details;
        }
      });

      return {
        id: filledId,
        date: `${date.format('DD/MM')} às ${date.format('HH:MM')}`,
        details: detailment,
        status: item.status
      }
    })
    return res.status(200).json(formattedData)
  }

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

  async update(req, res) {
    const { order_id: id, status } = req.query

    await knex("orders")
      .update({ status })
      .where({ id })

    return res.status(200).json()
  }

  async fetchDetails(req, res) {
    const { id } = req.query;

    const dataOrder = await knex
      .select('id as order_id', 'status', 'total')
      .from("orders")
      .where({ id })
      .first()

    const dataItems = await knex
      .select('products.id as product_id', 'order_items.quantity', 'products.name', 'products.price', 'products.image')
      .from("order_items")
      .join('products', 'order_items.product_id', 'products.id')
      .where({ order_id: id })

      
      const data = {
        ...dataOrder,
        items: [...dataItems]
        
      }
      
      res.status(200).json(data)
  }


}

module.exports = OrdersController;