const http=require('http')

const server=http.createServer((req,res)=>{
    res.end("Welcome")
})
server.listen(3000,'127.0.0.1',()=>
{
    console.log("Server listning 3000")
})