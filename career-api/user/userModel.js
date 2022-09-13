const mongoose = require('mongoose');
const { forgotPassword } = require('./userController');

var User = mongoose.model("users", new mongoose.Schema({
    firstName:{type : String},
    lastName:{type : String},
    email: {type : String},
    password: {type : String},
    forgotPasswordLink:{type: String},
}));

module.exports = User ;