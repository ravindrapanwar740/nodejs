// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3002

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('First example\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })
//----------
// var http=require("http")

// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'Text/Plain'})   
//     response.end('Second Example\n')
// }).listen(8081);
// console.log("Server http://127.0.0.1:8081/")
//--------
// var http=require('http')

// http.createServer(function(request,response)
// {
// response.writeHead(200,{'Content-Type':'Text/Plain'})
// response.end('Third Example')
// }).listen(8083);
// console.log("Server http://127.0.0.1:8083/")

// //-------
const http=require('http')
const hostname='127.0.0.1'
const port=8085
 const server=http.createServer((req,res)=>{
   res.statusCode=200
   res.setHeader=('Content-Type','text/plain')
   res.end('Fourth exmpl');
 })
 server.listen(port,hostname,()=>
 {
   console.log(`Server running at http://${hostname}:${port}/`)
 })