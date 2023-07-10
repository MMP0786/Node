const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function dbConnect() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  return db.collection('items');  
}

module.exports = dbConnect;
// async function insert(){
//   const data = await dbConnect()
//   const acc =await data.insertMany(
//     [{name:"Musharraf", sname:"Panwar", age:21},
//     {name:"Akram", sname:"Badri", age:21},
//     {name:"Usman", sname:"Gani", age:21}]
//     );
// }
// // insert();

// async function update(){
//   const data = await dbConnect()
//   const acc =await data.updateOne(
//    {name:"Usman"},
//    {$set:{age:20, profasion:"Business"}}
//     );
//     if(acc.acknowledged){
//       console.log("Updated Successfull")
//     }
// }
// // update()
// async function deletes(){
//   const data = await dbConnect();
//   const dele = await data.deleteOne({name:"Musharraf"});

// }
// deletes();





  // .then()
  // .catch(console.error)
  // .finally(() => client.close());

