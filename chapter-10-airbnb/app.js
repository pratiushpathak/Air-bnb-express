// external module
const express = require('express');

// local module
const userRouter=require('./routes/userrouter')
const hostRouter=require('./routes/hostrouter')

const app= express();


app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
res.status(404).send("<h1>404 Your page is not found on airbnb   </h1>");
})


const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})