const http = require("http");
const fs = require('fs');
const path = require("path")

const dirPath = path.join(__dirname, "files")
// const pros = require("process").argv;
// const data = require("./data")

// http.createServer(
//     (req, res)=>{
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write(JSON.stringify(data))
//         res.end()
//     }
// ).listen(4500)
// if(process.argv[2]=="add"){

//     fs.writeFileSync(process.argv[3], process.argv[4])
// }else if(process.argv[2]=="remove"){
//     fs.unlinkSync(process.argv[3])
// }
// console.log(process.argv)

// for(let i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/file${i}th.txt`, `this is data of file ${i}th `)
// }
const newFile =dirPath+"/fileth.txt";
fs.rename(dirPath+"/file0th.txt", newFile,  (err)=>{
    if(!err) console.log("Updated success")
})
// fs.appendFileSync(dirPath+"/file0th.txt", "this is also text",  (err)=>{
//     if(!err) console.log("Updated success")
// })
// fs.readFile(dirPath+"/file0th.txt", 'utf-8', (err, file)=>{
//     if(!err) console.log(file)
// })