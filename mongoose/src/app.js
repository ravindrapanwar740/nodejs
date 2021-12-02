const mongoose=require("mongoose")
//const server ="127.0.0.1:27017";


mongoose.connect("mongodb://localhost:27017/testing")
.then(()=>console.log("successful---"))
.catch((err)=>console.log(err))