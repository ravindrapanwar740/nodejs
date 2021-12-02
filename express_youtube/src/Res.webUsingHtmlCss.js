const express =require('express');
const app=express();
const {dirname}=require('path')


//middleware--
const path=require('path')
const staticpath = path.join(__dirname, "../public");

//set view engine---after making folder structure & file with hbs extension----
// app.set("view engine", "hbs");

app.use(express.static(staticpath))

//call hbs data----
// app.get("",(req,res)=>{
//     res.render('index');
// })

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    res.send("<marquee>About page</marquee>");
})


app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})