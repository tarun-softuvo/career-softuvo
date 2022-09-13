const mongoose = require('mongoose')

var Blog = mongoose.model('Blog',  new mongoose.Schema({
    title: { type: String, required: true },
    blog_id : { type: Number, required: true},
    slug: { type: String },
    category: { type: String, required: true },
    meta_title: { type: String, required: true },
    tags: { type: Array, required: true },
    meta_tag: { type: String, required: true },
    meta_description: { type: String, required: true },
    description:{type:String,required:true},
    content: { type: String, required: true },
    status: { type: Boolean, required: true },
    fileName: { type: String },
    popular : {  type: Boolean, default: false },
    date : { type: Number, default: new Date().getTime(),required: true}
}));

module.exports = Blog;