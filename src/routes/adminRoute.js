const express = require('express');
const route = express.Router();

const dashboardController = require('../app/controller/dashboardController');
const tourController = require('../app/controller/tourController');

route.get('/dashboard', dashboardController.index);
route.get('/tour', tourController.index);
route.get('/tour/create', tourController.create);
route.post('/tour/create', tourController.tour);
route.get('/tour/:id/edit', tourController.edit);
route.put('/tour/:id', tourController.update);

module.exports = route;