//core modules
const path=require('path');
//external modules
const express= require('express');
const userRouter=express.Router();
//local module
// const rootDir=require("../utils/pathutil");

const {hostRouter, registeredHomes}=require('./hostrouter')



userRouter.get("/",(req,res,next)=>{
  console.log(registeredHomes);

   res.render('home',{registeredHomes:registeredHomes})

  // res.sendFile(path.join(rootDir,"views","home.html"))
})


module.exports=userRouter;
