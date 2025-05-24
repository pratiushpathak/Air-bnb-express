//core module
const path=require('path')

// external module
const express = require('express');

// local module
const userRouter=require('./routes/userrouter')
const {hostRouter}=require('./routes/hostrouter')

const rootDir=require("./utils/pathutil");

const app= express();
//ejs setup
app.set('view engine','ejs');
app.set('views','views');


app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,'public')))

app.use((req,res,next)=>{
  //using render for ejs file
  res.status(404).render('404',{pageTitle:'page not found'})
// res.sendFile(path.join(rootDir,'views','404.html'))
})


const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})