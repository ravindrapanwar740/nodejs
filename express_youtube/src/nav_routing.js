const express = require("express");
const app = express();

// app.get('/',(req,res)=>{
//     res.send("Home Page")
// })
// app.get('/about',(req,res)=>{
//     res.send("about Page")
// })

// app.listen(3000,()=>
// {
//     console.log("Server 3000 is running")
// })

//send html-----
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
//send data as a json
app.get("/about", (req, res) => {
  //     res.send([
  //         {
  //         id:1,
  //         name:"xyz"
  //         },
  //         {
  //             id:1,
  //             name:"xyz"
  //             }, {
  //                 id:1,
  //                 name:"xyz"
  //                 },
  // ])

  res.json([
    {
      id: 1,
      name: "xyz",
    },
    {
      id: 1,
      name: "xyz",
    },
    {
      id: 1,
      name: "xyz",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server 3000 is running");
});
