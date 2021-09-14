const express = require('express');
const route = express.Router();

const blogsController = require('../app/controller/blogsController');

route.get('/', blogsController.index);

module.exports = route;