// //core modules
// const path=require('path');
//external module
const express= require('express')
const hostRouter=express.Router();
// const rootDir=require("../utils/pathutil");

const hostcontroller=require('../controllers/hostcontroller');
// const { registeredHomes } = require('../../chapter-12-dynamic-ui-using EJS/routes/hostrouter');

hostRouter.get("/add-home",hostcontroller.getaddhome)


// const price=[];

hostRouter.get("/edit-home",hostcontroller.getedithome)


hostRouter.post("/add-home",hostcontroller.postaddhome)

  

 

module.exports=hostRouter;


// exports.price=price;
