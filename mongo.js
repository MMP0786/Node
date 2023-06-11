const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let database;
let  clien = new MongoClient('mongodb://localhost:27017')

async function connectToDatabase() {
  const client = await clien.connect();
  database = client.db('local');
//   let clt = database.collection("products")
  let res = clt.find({}).toArray()
  console.log(clt)
}
// function getDb() {
//     if (!database) {
//       throw { message: 'Database not connected!' };
//     }
//     return database;
//   }

connectToDatabase()
// console.log(getDb())