const Category = require("./categoryModel");

module.exports ={
    addCategory: async (req, res) => {
        console.log("in add Category", req.body);
        Category.find({ category_name: req.body.category }, (err, docs) => {
          console.log("docs", docs);
          if (!docs.length) {
            new Category({
              category_name: req.body.category,
              status: req.body.status,
              date:new Date().getTime()
            }).save((err, docs) => {
              if (err) {
                res.send({ message: "Some Error Occured" });
              } else {
                res.status(201).json({ docs, message: "Added Successfully" });
              }
            });
          } else {
            res.send({ message: "Already Exist" });
          }
        });
      },
      displayCategoryList:async(req,res)=>{
        Category.find({status:'Enable'},{_id:0,category_name:1},(err,docs)=>{
            if(err){
                res.send({"message":err.message})
            }else{
                res.status(201).json({categories:docs})
            }
        })
      }  ,
      displayCategory: async (req, res) => {
        console.log("display categories", req.query);
        let limit = 6;
        let currentPage = req.query.page;
        try {
            let totalRecords = await Category.find({}).countDocuments();
          let docs = await Category.find({}).sort({_id:-1})
            .skip(limit * (currentPage - 1))
            .limit(limit);
            let pageCount =  Math.ceil(totalRecords/limit);
          res.status(200).json({ status: true, docs ,count:pageCount});
        } catch (err) {
          console.log("error", err.message);
          res.status(401).json({ status: false, message: "Some error Occured" });
        }
      },
      deleteCategory: async (req, res) => {
        console.log("in deleteCategory",req.body);
        Category.findByIdAndDelete({_id:req.body.id},(err,docs)=>{
            if(err){
                res.send('message',err.message)
            }else{
                res.status(201).json(docs)
            }
        })
      },
      editCategoryStatus: async (req, res) => {
        console.log("In Edit  Category  Status", req.body);
        Category.findByIdAndUpdate(
          { _id: req.body.id },
          { status: req.body.status },
          (err, docs) => {
            if (err) {
              res.send({ message: "Some error Occured" });
            } else {
              res.status(201).json({ docs });
            }
          }
        );
      },specificCategory:async(req,res)=>{
        Category.find({category_name:req.query.slug},(err,docs)=>{
            if(err){
                res.send({"message":err.message})
            }
            console.log('docs',docs)
            if(docs.length){
                res.status(201).json({docs})
            }else{
              res.status(200).json({docs:[]})
            }
        })
      },editCategory:async(req,res)=>{
        console.log('In Edit category',req.body)
        let pattern = req.body.category_name
         //
              
          Category.findOneAndUpdate({'_id':req.body.id},{'category_name':req.body.category_name,'status':req.body.status},(err,docs)=>{
                  console.log('docs',docs)  
                  if(err)
                    {
                        res.send({'message':err.message})
                    }
                    if(docs){
                      res.status(201).json({docs,message:'Update Success'})
                    }else{
                      res.send({'message':'Some Error occured'})
                    }
                })
    
            
       
      },
}