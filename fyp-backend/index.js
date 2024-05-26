const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers/foodRoutes");
require('dotenv').config()

const connectDB = require("./config/db")

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//setup the middleware function
app.use("/",router)

const start = async()=>{
  try{
   await connectDB()
   app.listen(port,console.log(`Server is running on http:// 192.168.28.89:${port}`))
  }
  catch(err){
console.log(err)
  }
}

start()
