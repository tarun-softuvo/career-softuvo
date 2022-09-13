const Job = require("./jobModel");

module.exports = {
  /**
   *
   * To post a job
   * jobController.addJob()
   */
  addJob: async (req, res) => {
    // console.log("Router called add job", req.body);
    const filename = req.file.filename
    new Job({
      position: req.body.position,
      fileName: filename,
      department: req.body.department,
      description: req.body.description,
      qualification: req.body.qualification,
      experience: req.body.experience,
      location: req.body.location,
      salary: req.body.salary,
      status: req.body.status,
      skills: req.body.skills,
      vacancies:req.body.vacancies,
      date:new Date().getTime(),
    }).save((err,docs)=>{
        if(err){
            console.log("error",err)
            res.status(400).json({'message':err.message})
        } 
        if(docs){
            res.status(201).json({'message':'Job Created'})
        }else{
            res.status(400).json({'message':'Bad Request'})
        }
    });
  },
  viewJobs:async(req,res)=>{
    let response = await Job.find().sort({date:-1}).skip().limit(6);
    res.status(200).json({jobs:response})
  },
  jobDetail:async(req,res)=>{
    let response =Job.find({_id:req.query.id},(err,docs)=>{
        if(err){
            console.log('error',err.message)
            res.status(400).json({'message':err.message})
        }
        if(docs){
            res.status(200).json({job:docs})
        }else{
            res.status(400).json({'message':err.message})
        }
    })
  }
};
