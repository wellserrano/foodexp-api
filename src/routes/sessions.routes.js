const { Router } = require("express")

const sessionsRoutes = Router();

const SessionController = require("../controllers/SessionController");
const sessionController = new SessionController();

sessionsRoutes.post("/", sessionController.create)

module.exports = sessionsRoutes;