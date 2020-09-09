const Router = require('express').Router();

module.exports = Router;

Router.get('/', (req, res) => {
  res.send('Hello');
});
