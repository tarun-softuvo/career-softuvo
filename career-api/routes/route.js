const express = require('express');
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        let fileName = new Date().getTime() +"-" + file.originalname
        cb(null,fileName)
    }
})

var upload = multer({
    storage,
    limits:{
        fileSize:2*1024*1024
    }
})
const blogController = require('../blog/blogController');
const userController = require('../user/userController');
const authenticateToken = require('../middleware/authenticateToken');
const categoryController = require('../category/categoryController');
const jobController = require('../jobs/jobController');
const router = express.Router();
router.post('/sign-up',userController.signup)
router.post('/login',userController.login)
router.post('/forgot-password',userController.forgotPassword)
router.get('/verify-reset-token',authenticateToken,userController.verifyToken)
router.post('/reset-password',authenticateToken,userController.resetPassword)
router.post('/change-password',authenticateToken,userController.changePassword)
router.post('/create-blog',upload.single("fileName"),blogController.createBlog)
router.get('/display-blogs',blogController.displayBlog)
router.post('/edit-blog-status',blogController.blogStatusChange)
router.post('/change-popular-status',blogController.popularStatusChange)
router.post('/edit-blog',upload.single('fileName'),blogController.editBlog)
router.get('/get-blog-detail',blogController.specificBlog)
router.post('/delete-blog',blogController.deleteBlog)
router.post('/add-category',categoryController.addCategory)
router.get('/get-category-namelist',categoryController.displayCategoryList)
router.get('/get-categories-details',categoryController.displayCategory)
router.get('/get-specific-category',categoryController.specificCategory)
router.post('/edit-category-status',categoryController.editCategoryStatus)
router.post('/edit-category',categoryController.editCategory)
router.post('/delete-category',categoryController.deleteCategory)
router.get('/get-statics',authenticateToken,blogController.getStatics)

router.post('/create-job',upload.single('fileName'),jobController.addJob)
router.get('/view-jobs',jobController.viewJobs)
router.get('/get-job-detail',jobController.jobDetail)
router.post('/create-newsletter',upload.single('fileName'),function(req,res){
    console.log('Request',req.body)
    res.status(201).json({'message':'Success'})})


module.exports=router