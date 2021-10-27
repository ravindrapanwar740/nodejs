const EventEmitter=require("events")

const event=new EventEmitter();

// event.on("Your name",()=>{
//     console.log("xyz")
// })

// event.on("Your name",()=>{
//     console.log("abc")
// })

// event.on("Your name",()=>{
//     console.log("pqr")
// })

// event.emit("Your name")

//---------

event.on("CheckPage",(sc,msg)=>{
console.log(`ur page ${sc} and code ${msg}`)
}
)

event.emit("CheckPage",200,"Ok")