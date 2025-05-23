//core modules
const path=require('path');
//external module
const express= require('express')
const hostRouter=express.Router();
const rootDir=require("../utils/pathutil");


hostRouter.get("/add-home",(req,res,next)=>{

  res.sendFile(path.join(rootDir,"views","addhome.html"))
    
})

const registeredHomes=[];


hostRouter.post("/add-home",(req,res,next)=>{
  console.log("home registration succeful for :", req.body.housename)
  
  registeredHomes.push({housename:req.body.housename});

   res.sendFile(path.join(rootDir,"views","homeadded.html"))
    
})

exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;
