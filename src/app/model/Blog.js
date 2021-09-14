const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Blog = new Schema({
    title: { type: String },
    avatar: { type: String },
    exceprt: { type: String },
    author: { type: String },
    date: { type: String },
    category: { type: Array },
});

module.exports = mongoose.model("Blog", Blog, 'blogs');