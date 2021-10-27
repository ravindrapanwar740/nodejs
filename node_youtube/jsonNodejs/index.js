const fs=require('fs')
const bdata={
    name:"xyz",
    age:26,
    address:"Indore"
}
 const jdata=JSON.stringify(bdata)
// console.log(jdata)

// const objdata=JSON.parse(jdata)
// console.log(objdata.age)

//----------
//create file
//read data

// fs.writeFile("json1.json",jdata,(err,data)=>{
// console.log("done")
// })

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(data)
    console.log(data)
    console.log(orgdata.name)

})
