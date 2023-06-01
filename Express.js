const express = require("express")
const app = express();
app.set('view engine', "ejs")

const path = require("path")
const pathDir = path.join(__dirname, 'Public')

// console.log(pathDir)
// app.use(express.static(pathDir))
app.get("/tto", (req, res)=>{
    res.sendFile(`${pathDir}/index.html`)
})
// app.get("*", (req, res)=>{
//     res.sendFile(`${pathDir}/first.html`)
// })

app.get("/update", (req, res)=>{
   const data ={
        name:'Musharraf Panwar',
        email: "musharrafpanwar@gmail.com",
        phNo: 7037502442
        // hobbies:["Reading", "fighting", "shoting"]
    }
    res.render("update", {data})
})
// app.get("/about", (req, res)=>{
//     // id =req.query.name1
//     res.send(`<h1>this is code and name :${req.query.name1}</h1>`)
//     res.send("<h1>this is code From about</h1>")
// })


app.listen(1100);