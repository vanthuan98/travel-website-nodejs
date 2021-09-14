const homeRoute = require('./homeRoute');
const destinationRoute = require('./destinationRoute');
const toursRoute = require('./toursRoute');
const blogsRoute = require('./blogsRoute');
const adminRoute = require('./adminRoute');

function route(app) {
    app.use('/', homeRoute);
    app.use('/destination', destinationRoute);
    app.use('/tours', toursRoute);
    app.use('/blogs', blogsRoute);
    app.use('/admin', adminRoute);
}

module.exports = route;

