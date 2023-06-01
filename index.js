const http = require("http");
const color = require("colors")
const fs = require("fs")
const path = require("path")

console.log("Allah-o-Akbar".green);
let dirPath = path.join(__dirname, "files");

// for(let i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/file${i}.text`, `This is file ${i}`)

// }

// fs.readFile(dirPath+"/file0.text", "utf8", (err, a)=>{
//     console.log(a)
// })

// fs.rename(dirPath+"/file2.text", dirPath+"/file6.text", (err)=>{
//     if(!err)console.log("updated")
// })

// fs.appendFile(`${dirPath}/file3.text`, "this is file 3 updated", (err)=>{
//     if(!err)console.log("it is append")
// })
// fs.unlinkSync("this is updated file")
// console.log(dirPath)
// fs.writeFileSync("apple.txt", "this is a apple")



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