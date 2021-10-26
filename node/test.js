// var http=require("http");
// http.createServer(function(request,response){
// response.writeHead(200,{'Content-Type':'Text/Plain'})


// response.end('Hello World and welcome\n')
// }).listen(8081);
// console.log("Server running  http://127.0.0.1:8081/")

var http=require("http")
var fs=require("fs")

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'Text/Plain'})

    // fs.readFile("input.txt",function(err,data){
    //     if(err) return console.err(err)
    //     console.log(data.toString())
    //     });
    //     console.log("Program end")
    
    response.end('Hello And Welcome\n')
}).listen(8081);
console.log("Server http://127.0.0.1:8081/")

// var fs=require("fs")
// fs.readFile("input.txt",function(err,data){
// if(err) return console.err(err)
// console.log(data.toString())
// });
// console.log("Program end")