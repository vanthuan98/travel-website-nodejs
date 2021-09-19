const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');


const Schema = mongoose.Schema;

const Tour = new Schema(
    {
        title: { type: String },
        price: { type: Number },
        review: { type: Number },
        rating: { type: Number },
        image: { type: String },
        excerpt: { type: String },
        description: { type: String },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    }
);

mongoose.plugin(slug);

module.exports = mongoose.model("Tour", Tour, "tours");

