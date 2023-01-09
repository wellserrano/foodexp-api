const knex = require("../database/knex")
const AppError = require("../utils/AppError")

const DiskStorage = require("../providers/DiskStorage");

class ProductsController {
  async create(req, res) {
    const { name, price, description, image } = req.body

    const product_id = await knex("products")
      .insert({
        name,
        price,
        image,
        description,
      })

    return res.status(201).json(product_id)
    
  };

  async saveImage(req, res) {
    const imageFileName = req.file.filename

    const diskStorage = new DiskStorage();

    await diskStorage.saveFile(imageFileName);

    return res.status(201).json()
  }
}

module.exports = ProductsController;