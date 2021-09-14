const Tours = require('../model/Tours');
const { mutipleMongooseToObject } = require("../../util/mongoose");


class toursController {

    // [GET] /
    index(req, res, next) {
        Tours.find({}).then(tour => {
            res.render('tours', { tour: mutipleMongooseToObject(tour) });
        }).catch(next);
    }
}

module.exports = new toursController();