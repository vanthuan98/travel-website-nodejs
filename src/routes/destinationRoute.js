const express = require('express');
const route = express.Router();

const destinationController = require('../app/controller/destinationController');

route.get('/', destinationController.index);

module.exports = route;