const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hannah Elmer')
  });

module.exports = routes

