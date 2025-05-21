// external module
const express = require('express');

// local module
const userRouter=require('./routes/userrouter')
const hostRouter=require('./routes/hostrouter')

const app= express();


app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);


const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})