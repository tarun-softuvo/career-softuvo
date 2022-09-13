const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const cors = require('cors')
const fs= require('fs')
const path = require('path')
const dotenv = require("dotenv");
dotenv.config();
// const port =8001
const port = process.env.PORT
fs.existsSync('uploads') || fs.mkdirSync('uploads')
const db = require("./config/db");
const routes = require('./routes/route');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/uploads/", express.static('uploads'));
app.use(cors())
app.use('/',routes)

app.listen(port,()=>{
    console.log('Request listened at port',port)
})