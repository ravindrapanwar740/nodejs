const http=require('http')

const server=http.createServer((req,res)=>{
    //console.log(req.url)
if(req.url=='/')
{
res.end("Home page")
}
else if(req.url=='/about')
{
 res.end("About Page")
}
else if(req.url=='/contact')
{
 res.end("Contact Page")
}
else{
    res.writeHead(404,{'Content-Type':'text/plain'})
     res.end('404 page not found')
}
})
server.listen(3000,'127.0.0.1',()=>
{
    console.log("Server listning 3000")
})