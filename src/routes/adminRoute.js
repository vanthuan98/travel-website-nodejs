const express = require('express');
const route = express.Router();

const adminController = require('../app/controller/adminController');

route.get('/', adminController.index);

module.exports = route;