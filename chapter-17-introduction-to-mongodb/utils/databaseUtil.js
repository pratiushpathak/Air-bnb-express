const mongo=require("mongodb");
// const { error } = require("../../chapter-14-dynamic-path/controllers/storecontroller");

const MongoClient=mongo.MongoClient;

const MONGO_URL="mongodb+srv://root:root@completecoding.lur5pqj.mongodb.net/?retryWrites=true&w=majority&appName=CompleteCoding";

let _db;

const mongoConnect=(callback)=>{
  MongoClient.connect(MONGO_URL).then(client=>{

  console.log(client);
  callback( );
  _db=client.db('airbnb');
}).catch(err=>{
  console.log("error while connenecting",err)
});

}

const getDB= ()=>{
  if(!_db)
  {
    throw new Error('MONGO not connected')
  }
  return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDB=getDB;