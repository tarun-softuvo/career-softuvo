const mongoose = require('mongoose')

var Job = mongoose.model("job",new mongoose.Schema({
    position:{type:String,required:true},
    fileName: {type:String},
    department: {type:String,require:true},
    description: {type:String,required:true},
    qualification: {type:String},
    experience: {type:String,required:true},
    location: {type:String,required:true},
    salary: {type:String},
    status: {type:Boolean,required:true},
    skills: {type:String,required:true},
    vacancies:{type:Number,required:true},
    date:{type:Number,default:new Date().getTime()}
}));

module.exports = Job;