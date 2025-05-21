const express= require('express')
const hostRouter=express.Router();


hostRouter.get("/host/add-home",(req,res,next)=>{

  res.send(`<h1>Register your home here:</h1>
    <form action="/host/add-home" method="POST">
  
    <input type="text" name="housename" placeholder="enter the name of your house ">
    <input type="submit">


  </form>`);
    
})



hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body)

  res.send(`<h1>Home Registered succesfully </h1>
     <a href="/">Go to home</a>
   `);
   
    
})

module.exports=hostRouter;
