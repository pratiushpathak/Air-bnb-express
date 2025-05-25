// //core modules
// const path=require('path');
//external module
const express= require('express')
const hostRouter=express.Router();
// const rootDir=require("../utils/pathutil");

const homescontroller=require('../controllers/homes');
// const { registeredHomes } = require('../../chapter-12-dynamic-ui-using EJS/routes/hostrouter');

hostRouter.get("/add-home",homescontroller.getaddhome)


// const price=[];




hostRouter.post("/add-home",homescontroller.postaddhome)
  

 

exports.hostRouter=hostRouter;


// exports.price=price;
