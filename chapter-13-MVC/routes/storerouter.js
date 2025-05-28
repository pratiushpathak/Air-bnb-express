
//external modules
const express= require('express');
const storerouter=express.Router();
//local module
// const rootDir=require("../utils/pathutil");

const homescontroller=require('../controllers/storecontroller');






storerouter.get("/",homescontroller.gethomes)


storerouter.get("/bookings",homescontroller.getbookings)


module.exports=storerouter;
