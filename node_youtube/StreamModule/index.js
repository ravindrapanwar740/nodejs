const fs=require("fs")
const http=require("http")

const server=http.createServer();

server.on("request",(req,res)=>
{
    //1st way------

// fs.readFile("input.txt",(err,data)=>
// {
//     if(err) return console.error(error)
//     res.end(data.toString())
// })

//2nd Way---------
//reading streaming---------
// const rstream=fs.createReadStream("input.txt")
// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });
// rstream.on("end",(chunkdata)=>{
//     res.end();
// });
// rstream.on("error",(err)=>{
//     console.log(err)
//     res.end("page not found");
// });

//3rd Way-------stream pipes:->
const rstream=fs.createReadStream("input.txt")
//readable.pipe(destination,[,options])
rstream.pipe(res)
});
server.listen(8000,"127.0.0.1")