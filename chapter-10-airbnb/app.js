//core module
const path=require('path')

// external module
const express = require('express');

// local module
const userRouter=require('./routes/userrouter')
const hostRouter=require('./routes/hostrouter')

const rootDir=require("./utils/pathutil");

const app= express();


app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
res.sendFile(path.join(rootDir,'views','404.html'))
})


const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})