const mongoose = require('mongoose');


async function connect() {
    let db;

    try {
        db = await mongoose.connect('mongodb://localhost:27017/website_travel_travio');

        console.log('connect successfully!!!');

    } catch (error) {
        console.log('Connect to failed: ', error);
    }

    return db;
}

module.exports = { connect };