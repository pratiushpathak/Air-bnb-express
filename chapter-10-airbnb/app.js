const express = require('express');
const app= express();



const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})