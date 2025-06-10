
const fs= require('fs');
const path=require('path');
const rootDir=require('../utils/pathutil');
const { json } = require('stream/consumers');

//fake database
// let registeredHomes=[];
const favoritedatapath=path.join(rootDir,'data','favorite.json')

module.exports= class Favorite{

 static addtofavorite(homeid,callback)
 {

   Favorite.getfavorites(favorites=>{
   
      // const homedatapath=path.join(rootDir,'data','homes.json')
      if(favorites.includes(homeid))
      {
       
        console.log("home is already marked favorite");
      }
      else
      {
      favorites.push(homeid);
      }
      fs.writeFile(favoritedatapath,JSON.stringify(favorites),callback)
      })


 }

 static getfavorites(callback)
 {
   fs.readFile(favoritedatapath,(err,data)=>{
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
}