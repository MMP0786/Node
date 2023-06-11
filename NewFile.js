const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

const database = "local";

console.log("other")
async function getData(){
    console.log("not connected yet")
     await client.connect();
    console.log("connected")
    const db = clientn.db(database);
    const result = db.collection("startup_log");
    const responce = await result.find({}).toArray();
    console.log(responce)
}
getData()