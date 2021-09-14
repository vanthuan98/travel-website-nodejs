const { mutipleMongooseToObject } = require('../../util/mongoose');
const Blog = require('../model/Blog');

class blogsController {

    // [GET] /
    index(req, res, next) {
        Blog.find({}).then(blog => {
            res.render('blogs', { blog: mutipleMongooseToObject(blog) });
        }).catch(next);
    }
}

module.exports = new blogsController();