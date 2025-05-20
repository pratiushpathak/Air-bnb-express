const express = require('express');
const app= express();


app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})

app.get("/",(req,res,next)=>{

  res.send(`<h1>Welcome to airbnb</h1>
    
    <a href="/add-home">Add Home</a>
    `);
})

app.get("/add-home",(req,res,next)=>{

  res.send(`<h1>Register your home here:</h1>
    <form action="/add-home" method="POST">
  
    <input type="text" name="housename" placeholder="enter the name of your house ">
    <input type="submit">


  </form>`);
    
})



app.post("/add-home",(req,res,next)=>{

  res.send(`<h1>Home Registered succesfully </h1>
     <a href="/">Go to home</a>
   `);
   
    
})



const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})