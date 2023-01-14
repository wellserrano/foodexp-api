const { Router } = require("express");

const statusRoute = Router();

statusRoute.get("/", (req, res) => {
    res.json({status: 'Online'})
  }
)

module.exports = statusRoute;