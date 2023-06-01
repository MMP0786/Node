const express = require("express")
const app = express();
const route = express.Router();

const a =20;
const firterReq = ((req, res, next)=>{
    if(!req.query.age){
        // console.log("first")
        res.send("Please provide age")
    }else if(req.query.age<18 ){
        res.send("You can't access")
    }else{
        next()

    }
    // next()
})
route.use(firterReq)
// app.use(firterReq)

app.get("/", (req, res)=>{
    res.send("<h1>This is home page</h1>")
})
// app.get("/other", firterReq, (req, res)=>{
    //     res.send("<h1>This is home page</h1>")
    // })

route.get("/about", (req, res)=>{
    res.send("<h1>This is about page</h1>")
})
route.get("/contact", (req, res)=>{
    res.send("<h1>This is about and Contact page</h1>")
})


app.use("/", route)
app.listen(5000)

