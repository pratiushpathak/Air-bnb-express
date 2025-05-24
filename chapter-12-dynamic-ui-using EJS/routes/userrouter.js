//core modules
const path=require('path');
//external modules
const express= require('express');
const userRouter=express.Router();
//local module
// const rootDir=require("../utils/pathutil");

const {hostRouter, registeredHomes,price}=require('./hostrouter')



userRouter.get("/",(req,res,next)=>{
  console.log(registeredHomes);

  // the variable we define renders here
   res.render('home',{registeredHomes:registeredHomes,
    pageTitle:'airbnb home'})


  // res.sendFile(path.join(rootDir,"views","home.html"))
})


module.exports=userRouter;
