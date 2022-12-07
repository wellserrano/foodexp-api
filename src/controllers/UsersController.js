const AppError = require("../utils/AppError")
const knex = require("../database/knex");

const { hash } = require("bcrypt")
class UsersControllers {

  index(req, res) {
    res.json({status: 'Online'})
  }

  async create(req, res) {
    const { name, email, password, admin } = req.body

    if (!name ||!email || password.length < 6) {
      throw new AppError("Confira se todos os campos estão devidamente preenchidos", 401)
    }

    const userExists = await knex("users")
      .where({ email })
      .first();
    
    if (userExists) {
      throw new AppError("User already exists", 409)
    }

    const hashedPassword = await hash(password, 8);

    await knex("users")
      .insert({
        name,
        email,
        admin: admin ?? false,
        password: hashedPassword,
      })

    return res.status(201).json()
  }
}

module.exports = UsersControllers;