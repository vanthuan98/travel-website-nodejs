const Tour = require('../model/Tours');
const { mutipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");

class tourController {

    // [GET] /admin/tour
    index(req, res, next) {
        Tour.find({}).then(tour => {
            res.render('admin/tour/tour', { tour: mutipleMongooseToObject(tour) });
            console.log(tour.createAt);
        }).catch(next);
    }

    // [GET] /admin/tour/create
    create(req, res, next) {
        res.render('admin/tour/create');
    }

    // [POST] /admin/tour
    tour(req, res, next) {
        const tour = new Tour(req.body);
        tour.save()
            .then(() => {
                res.redirect("/admin/tour");
            })
            .catch(next);
    }

    // [GET] /admin/tour/:id/edit
    edit(req, res, next) {
        Tour.findOne({ _id: req.params.id })
            .then(tour => {
                res.render('admin/tour/edit', {
                    tour: mongooseToObject(tour),
                });
            }).catch(next);
    }

    // [PUT] /admin/tour/:id
    update(req, res, next) {
        Tour.findByIdAndUpdate(req.params.id, { $set: req.body })
            .then(() => {
                res.redirect('/admin/tour');
            })
            .catch(next);
    }
}

module.exports = new tourController();