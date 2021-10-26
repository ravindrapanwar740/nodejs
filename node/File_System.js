var fs=require("fs")

//Asyn data

fs.readFile("input.txt",function(err,data){
if(err) return console.err(err)
console.log(data.toString())
});
console.log("Async data")

//Sync data
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");