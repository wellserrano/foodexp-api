const AppError = require("../utils/AppError")

class UsersControllers {

  index(req, res) {
    res.json({status: 'Online'})
  }

  create(req, res) {
    const { name, email, password } = req.body

    if (!name ||!email ||!password) {
      throw new AppError("Name, email and password are required", 401)
    }

    return res.status(201).json()
  }
}

module.exports = UsersControllers;