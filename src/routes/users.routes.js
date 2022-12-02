const { Router } = require("express");

const usersRoutes = Router();

const UsersControllers = require("../controllers/UsersControllers")
const usersControllers = new UsersControllers();

usersRoutes.get("/", usersControllers.index)
usersRoutes.post("/", usersControllers.create);

module.exports = usersRoutes;