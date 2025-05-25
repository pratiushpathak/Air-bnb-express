
//external modules
const express= require('express');
const userRouter=express.Router();
//local module
// const rootDir=require("../utils/pathutil");

const homescontroller=require('../controllers/homes');





userRouter.get("/",homescontroller.gethomes)


module.exports=userRouter;
