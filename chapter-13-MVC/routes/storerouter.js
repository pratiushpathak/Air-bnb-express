
//external modules
const express= require('express');
const storerouter=express.Router();
//local module
// const rootDir=require("../utils/pathutil");

const homescontroller=require('../controllers/storecontroller');






storerouter.get("/",homescontroller.getindex)
storerouter.get("/homes",homescontroller.gethomes)

storerouter.get("/bookings",homescontroller.getbookings)

storerouter.get("/favorites",homescontroller.getfavoritelist)


module.exports=storerouter;
