const knex = require("../database/knex")
const AppError = require("../utils/AppError")

const DiskStorage = require("../providers/DiskStorage");

class ProductsController {
  async index(req, res) {
    const { product_id } = req.query;

    const response_products = await knex("products")
      .where({id: product_id})
      .first();

    const response_ingredients = await knex("ingredients")
      .where({ product_id })

    const ingredients = response_ingredients.map(
      ingredient => ingredient.name.normalize("NFD")
        .replace(/[\u0300-\u036f]|_|-/gi, 
          match => match === "_" || match === "-" ? " " : "")
    );

    const data = { ...response_products, ingredients }
    

    return res.status(200).json(data);
  
  }

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

    return res.status(201).json(imageFileName);
  }


  async populateDatabase(req, res) {
    const data = req.body

    const dataJson = JSON.stringify(data);
    const dataJson_objects = JSON.parse(dataJson)

    const products = dataJson_objects.map(product => product.product)

    await knex("products").insert(products)

    const productsArray = await Promise.all(dataJson_objects.map(async e => {      
      const product_id = await knex("products").select('id').where({name: e.product.name}).first()
      
      return {
        ...product_id,
        items: e.ingredients
      }
    }));

    let ingredientsInsert = new Array();
    
    productsArray.forEach(product => {
        product.items.map(ingredient => { 
          ingredientsInsert.push({
            product_id: product.id,
            name: ingredient
        });
      });
    });


    await knex("ingredients").insert(ingredientsInsert)
      
    res.status(201).json("Data inserted successfully!");
      
  }
}

module.exports = ProductsController;