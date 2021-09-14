const Destination = require('../model/Destination');
const { mutipleMongooseToObject } = require("../../util/mongoose");

class destinationController {

    // [GET] /
    index(req, res, next) {
        Destination.find({}).then(destination => {
            res.render('destination', { destination: mutipleMongooseToObject(destination) });
            // res.send(destination);
        }).catch(next);
    }
}

module.exports = new destinationController();