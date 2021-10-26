var fs=require('fs')

//Syncronous------
// const data=fs.readFileSync('first.txt','utf-8')
// console.log(data)

//Asyncronous---------
const data=fs.readFile('first.txt','utf-8',(err,data)=>{
    console.log(data)
})
console.log("After call")