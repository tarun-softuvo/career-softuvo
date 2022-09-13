const mongoose = require('mongoose')

var Category = mongoose.model("category",new mongoose.Schema({
    category_name: { type: String, required: true },
    status : { type: String, required: true},
    date:{type: Number, default: new Date().getTime()}
}));

module.exports = Category;