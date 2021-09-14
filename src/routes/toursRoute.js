const express = require('express');
const route = express.Router();

const toursController = require('../app/controller/toursController');

route.get('/', toursController.index);

module.exports = route;