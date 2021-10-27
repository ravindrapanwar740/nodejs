const express=require('express');
const { dirname } = require('path');
const app=express();
const port =3001;

//middleware----
const path=require('path')
const staticpath=path.join(__dirname,'../web_app')
 app.use(express.static(staticpath))

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})
