// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");


var fs=require("fs")
fs.readFile("input.txt",function(err,data){
if(err) return console.err(err)
console.log(data.toString())
});
console.log("Program end")