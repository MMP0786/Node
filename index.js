const http = require("http");
const color = require("colors")
console.log("Allah-o-Akbar".green);

// http.createServer((req, res)=>{
//     res.write("<h1>This is responce</h1>");
//     res.end();
// }).listen(4500);

// http.createServer((req, res)=>{
//     res.writeHead(200, {"Cntent-Type": "application/json"})
//     res.write(JSON.stringify({name: "Musharraf", fname:"Panwar", age:22}))
//     res.end();
// }).listen(4500)

// const app = require("./first.js");
// const fs = require("fs")

// console.log(">>>...", __dirname);
// fs.writeFileSync("file.txt", "This is file 1");
// console.log(fs.readFileSync("file.txt"));
// console.log(app.sort((a,b )=>{
//     return a-b;
// }))