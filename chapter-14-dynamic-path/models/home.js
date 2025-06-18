
const fs= require('fs');
const path=require('path');
const rootDir=require('../utils/pathutil');
const { json } = require('stream/consumers');

//fake database
// let registeredHomes=[];
const homedatapath=path.join(rootDir,'data','homes.json')

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

      if(this.id)
    {//this is edit home case 
    registeredHomes=registeredHomes.map(home=>
       home.id===this.id ? this : home)
        console.log("homeadded")

    }
    else
    { //this is add home case
      this.id = Math.random().toString();
      registeredHomes.push(this);
     
    }
 
  
    fs.writeFile(homedatapath,JSON.stringify(registeredHomes),error=>{
      console.log("File writing",error)
    })
    })
   
  }
  static fetchAll(callback)
  {
     
     fs.readFile(homedatapath,(err,data)=>{
      // console.log("file read",err,data)
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

 static findbyid(homeid,callback)
 {
 this.fetchAll(homes=>{
 const homefound= homes.find(home=> home.id=== homeid);
 callback(homefound)
 })
 }

}