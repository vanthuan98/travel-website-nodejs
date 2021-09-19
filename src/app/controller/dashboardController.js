

class dashboardController {

    // [GET] /
    index(req, res, next) {
        res.render('admin/dashboard');
    }
}

module.exports = new dashboardController();