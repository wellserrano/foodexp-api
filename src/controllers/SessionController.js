const knex = require("../database/knex");

const { compare } = require("bcrypt")
const { sign } = require("jsonwebtoken");

const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth");



class SessionController {
  async create(req, res) {
    const { email, password } = req.body

    const user = await knex("users")
      .where({ email })
      .first();

    if (!user) {
      throw new AppError("Email ou senha incorretos", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email ou senha incorretos", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, { 
      subject: String(user.id),
      expiresIn
    })

    return res.json({ user, token })
  }
}

module.exports = SessionController;