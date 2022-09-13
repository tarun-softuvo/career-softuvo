const Blog = require("./blogModel");
const Category = require("../category/categoryModel");
const sharp = require('sharp')
const path = require('path')

module.exports = {
  createBlog: async (req, res) => {
    let image = req.files;
    // console.log('image req',req.file,req.files)
    const filename= req.file.filename;
    // await sharp(req.file.path).jpeg({quality:90}).toFile()
    // await  path.resolve(req.file.destination,'resized',filename)
    //   )
    //   fs.unlinkSync(req.file.path)
    let url = req.protocol + "://" +req.get('host');
    console.log('url',url,image)

    let {title,tags} = req.body;
    let tagArray=[];
    let blog_id = 1;
    let slug = title.trim().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s\s+/g,'').replace(/ /g,'-').toLowerCase()
    let output = tags.split(',')
    output.map((item)=>{tagArray.push(item.trim())})
    let blogs = await Blog.find({}).sort({date:-1})
      if(blogs.length){
        blog_id= blogs[0].blog_id +1
      }
      console.log('blog_id',blogs[0].blog_id, blog_id)
      new Blog({
        title: title.trim(),
        blog_id : blog_id,
        slug: slug,
        category: req.body.category,
        meta_title: req.body.meta_title.trim(),
        tags: tagArray,
        meta_tag: req.body.meta_tag.trim(),
        meta_description: req.body.meta_description.trim(),
        content: req.body.content.trim(),
        description:req.body.description.trim(),
        status: req.body.status,
        fileName: filename,
        popular : req.body.popular,
        date: new Date().getTime()
      }).save((err,docs)=>{
        if(err){
          console.log("error",err)
          res.send({"message":err.message})
        }else{
            
            res.status(201).json({docs,message:'Added Successfully'})
        }
      })

  },
  displayBlog: async (req, res) => {
    console.log("in display blog",req.query);
    let limit = 6;
    let currentPage= req.query.page || 1;
    try{
        let totalBlogCount = await Blog.find({}).countDocuments();
        let blogs = await Blog.find().sort({date:-1}).skip((currentPage-1)*limit).limit(limit);
        let pageCount = Math.ceil(totalBlogCount /limit);
        res.status(201).json({blogs,count:pageCount})
    }catch(err){
      console.log('Error',err.message)
      res.send({'message':err.message})
    }
  },
  popularStatusChange:async(req,res)=>{
    console.log('popular Status Change',req.body)
    Blog.findByIdAndUpdate({_id:req.body.id},{popular:req.body.status},(err,docs)=>{
      if(err){
        console.log('error',err.message)
        res.send({'message':err.message})
      }else{
          res.status(201).json(docs)
      }
    })
  },
  blogStatusChange:async(req,res)=>{
    console.log('popular Status Change',req.body)
    Blog.findByIdAndUpdate({_id:req.body.id},{status:req.body.status},(err,docs)=>{
      if(err){
        console.log('error',err.message)
        res.send({'message':err.message})
      }else{
          res.status(201).json(docs)
      }
    })
  }
  ,specificBlog:async(req,res)=>{
    console.log('specific Blog',req.query)
    Blog.find({slug:req.query.slug},(err,docs)=>{
      if(err){
        console.log('error',err.message)
      }
      if(docs.length){
        res.status(201).json(docs)
      }else{
        res.status(200).json({docs:[]})
      }
    })
  },
  editBlog:async(req,res)=>{
    // console.log("edit blog",req.body)
   
    let url = req.protocol + "://" +req.get('host');
    let {title,tags} = req.body;
    let tagArray=[];
    let output = tags.split(',')
    let slug = title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s\s+/g,' ').trim().replaceAll(' ','-').toLowerCase()
    if(!req.body.fileName){
      req.body.fileName= url + '/' +req.file.path
      // const filename= req.file.filename;
      // await sharp(req.file.path).resize(300,300).jpeg({quality:100}).toFile(
      // await  path.resolve(req.file.destination,'resized',filename)
      //   )
      //   fs.unlinkSync(req.file.path)
    }
    console.log('filename',req.file)
    console.log('request filename',req.body)
    output.map((item)=>{tagArray.push(item.trim())})
    Blog.findByIdAndUpdate({_id:req.body.id},{
      title: req.body.title.trim(),
      category: req.body.category,
      slug:slug,
      meta_title: req.body.meta_title.trim(),
      tags: tagArray,
      meta_tag: req.body.meta_tag.trim(),
      meta_description: req.body.meta_description.trim(),
      content: req.body.content.trim(),
      fileName:  req.body.fileName,
      popular : req.body.popular,
    },(err,docs)=>{
      console.log('output',docs)
      if(docs){
        res.status(201).json({docs,'message':'Update Success'})
      }else{
        res.send({'message':'Some error Occured'})
      }
    })

  },
  deleteBlog:async(req,res)=>{
    console.log('delete blog')
    Blog.findByIdAndDelete({_id:req.body.id},(err,docs)=>{
      if(err){
        console.log('error',err.message)
      }else{
        res.status(201).json(docs)
      }
    })
  },
 
  getStatics:async(req,res)=>{
    let blogsCount= await Blog.find({}).countDocuments();
    let categoryCount = await Category.find({}).countDocuments();
    // console.log('count',blogsCount,categoryCount)
      res.status(201).json({blogsCount,categoryCount})
  }
};
