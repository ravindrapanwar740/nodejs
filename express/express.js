var express=require('express');
var app=express();

app.get('/',function(req,res){
res.send("<h1>Home Page</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>About page</h1>")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact page<h1>")
})
//console.log(``, )
//
app.listen(3002,()=>{
    console.log("server running 3002")
})



