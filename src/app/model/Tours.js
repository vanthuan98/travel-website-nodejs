const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Tour = new Schema({
    title: { type: String },
    price: { type: Number },
    review: { type: Number },
    rating: { type: Number },
    excerpt: { type: String },
    description: { type: String },
});

module.exports = mongoose.model("Tour", Tour, "tours");

