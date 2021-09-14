const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Destination = new Schema({
    des: { type: String },
    avatar: { type: String },
});

module.exports = mongoose.model("Destination", Destination, 'destination');