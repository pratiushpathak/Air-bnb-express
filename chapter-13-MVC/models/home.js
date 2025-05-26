
const fs= require('fs');
const path=require('path');
const rootDir=require('../utils/pathutil');
const { json } = require('stream/consumers');

//fake database
// let registeredHomes=[];

module.exports= class Home{

  constructor(housename,price,location,rating,photourl)
  {
    this.housename=housename;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photourl=photourl;
    
  }
  save()
  {
    Home.fetchAll(registeredHomes=>{
 registeredHomes.push(this);
    const homedatapath=path.join(rootDir,'data','homes.json')
    fs.writeFile(homedatapath,JSON.stringify(registeredHomes),error=>{
      console.log("File writing",error)
    })
    })
   
  }
  static fetchAll(callback)
  {
     const homedatapath=path.join(rootDir,'data','homes.json')
     fs.readFile(homedatapath,(err,data)=>{
      console.log("file read",err,data)
      if(!err)
      {
        callback( JSON.parse(data));
      }
      else
      {
   callback([])
      }
    
     
     });


    
  }


}