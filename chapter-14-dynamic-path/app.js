//core module
const path=require('path')

// external module
const express = require('express');
  // const homescontroller=require('./controllers/homescontrollerjs')
  const hostcontroller=require('./controllers/storecontroller')

// local module
const storerouter=require('./routes/storerouter')
const hostRouter=require('./routes/hostrouter')


const rootDir=require("./utils/pathutil");

const app= express();
//ejs setup
app.set('view engine','ejs');
app.set('views','views');


app.use(express.urlencoded());
app.use(storerouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,'public')))

//  app.use(h.error)

const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})