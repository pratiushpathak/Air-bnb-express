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
hostRouter.get("/host-home-list",hostcontroller.gethosthomes)


hostRouter.post("/add-home",hostcontroller.postaddhome)
hostRouter.get("/edit-home/:homeid",hostcontroller.getedithome)

  

 

module.exports=hostRouter;


// exports.price=price;
