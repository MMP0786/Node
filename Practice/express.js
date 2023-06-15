const express = require("express")
const app = express();
const path = require("path");
const route = express.Router();



// const rqFil = require('r')
const dirPath = path.join(__dirname, '/htmls')
// const newD = path.join(dirPath, "/index.html")

app.use(express.static(dirPath))

// const requireFileter = (req, res, next)=>{
//     // let data =4;
//     if(req.query.name){
//         res.send("this inside of require")
//         }else {
            
//             next()
//         } 
// }
// // app.use(requireFileter)
// // route.use(requireFileter)
// app.get("/", (req, res)=>{
//     res.sendFile(newD);
// })
// route.get("/home",  (req, res)=>{
//     res.send("<h1>This is Home</h1>")
// })
// app.get("*", (req, res)=>{
//     res.send("<h1>This is Wrong Data Type</h1>")
// })
// // console.log(newD)

// app.use("/", route)
app.listen(4500)