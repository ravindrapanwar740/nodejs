const express=require("express");
const { dirname } = require("path");
const app=express();

//middleware-----
const path=require('path');
const staticpath=path.join(__dirname,'../public')

//set hbs function....
app.set("view engine","hbs")

app.use(express.static(staticpath))

//template engine route
// app.get("",(req,res)=>{
//     res.render("index")
// })
//
app.get('/',(req,res)=>{
    res.send("Express hello")
})
app.get('/ab',(req,res)=>{
    res.send("about page")
})

app.listen(8000,()=>
{
    console.log("server running on 8000")
})
