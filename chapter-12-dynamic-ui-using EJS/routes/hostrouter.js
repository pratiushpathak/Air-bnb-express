//core modules
const path=require('path');
//external module
const express= require('express')
const hostRouter=express.Router();
const rootDir=require("../utils/pathutil");


hostRouter.get("/add-home",(req,res,next)=>{

   res.render('addhome',{pageTitle:'Add Home to Airbnb',currentpage:'addhome'})
  // res.sendFile(path.join(rootDir,"views","addhome.html"))
    
})

const registeredHomes=[];
// const price=[];




hostRouter.post("/add-home",(req,res,next)=>{
  console.log("home registration succeful for :", req.body.housename,req.body)
  

  registeredHomes.push(req.body);
  // price.push()



   res.render('homeadded',{pageTitle:'Home added succesfully',currentpage:'homeadded'})
  //  res.sendFile(path.join(rootDir,"views","homeadded.html"))
    
})

exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;
// exports.price=price;
