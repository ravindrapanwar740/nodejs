const express = require('express')
const app=express()
const bodyParser=require('body-parser')

//body-parser---
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
  })

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})
