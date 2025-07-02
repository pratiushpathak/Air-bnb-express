const mongo=require("mongodb");
// const { error } = require("../../chapter-14-dynamic-path/controllers/storecontroller");

const MongoClient=mongo.MongoClient;

const MONGO_URL="mongodb+srv://root:root@completecoding.lur5pqj.mongodb.net/?retryWrites=true&w=majority&appName=CompleteCoding";

const mongoConnect=(callback)=>{
  MongoClient.connect(MONGO_URL).then(client=>{

  console.log(client);
  callback( client);
}).catch(err=>{
  console.log("error while connenecting",error)
});

}
module.exports=mongoConnect;