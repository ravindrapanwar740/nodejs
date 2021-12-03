const mongoose = require("mongoose");
//const server ="127.0.0.1:27017";

//create database----
mongoose
  .connect("mongodb://localhost:27017/testingDB")
  .then(() => console.log("connection successful---"))
  .catch((err) => console.log(err));

//schema--> structures of documents
const playListSchema = new mongoose.Schema({
  // name: String,
  // mobile: Number,
  // city: String,
  // active: Boolean,
});

//collection creation----
//models-->is a wrapper of mongoose schema
//items--document name
const PlayList = new mongoose.model("Items", playListSchema);

//create doccument or insert

//async await bcoz return promise--

// const result = await reactPlayList.save();

//-----
// const createElement = async () => {
//   try {
//     const reactPlayList = new PlayList({
//       name: "React",
//       mobile: 1111,
//       city: "Khargone",
//       active: true,
//     });
//     const nodePlayList = new PlayList({
//       name: "Node",
//       mobile: 2222,
//       city: "Bhopal",
//       active: true,
//     });
//     const expressPlayList = new PlayList({
//       name: "Express",
//       mobile: 3333,
//       city: "Jabalpur",
//       active: true,
//     });
//     const mongoPlayList = new PlayList({
//       name: "Mongo",
//       mobile: 4444,
//       city: "Sagar",
//       active: true,
//     });

//     // reactPlayList.save();
//     //async await bcoz return promise--

//     //----insert many documents.........
//     const result = await PlayList.insertMany([
//       reactPlayList,
//       nodePlayList,
//       expressPlayList,
//       mongoPlayList,
//     ]);
//    // console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createElement();

//get Data---
// const getDocument = async () => {
//   try {
//     const result = await PlayList
//       //.find({city:"Bhopal"})
//       .countDocuments()
//       .select({ name: 1 })
//       .sort("name:1");

//     // .limit(1)
//     console.log("Get Item....", result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

//update the document------
const updateDocument =async (_id)=>{
try{
const result = await PlayList.updateOne({_id},{
$set:{
    name:"Mongoose"
}
});
console.log(result)
}
catch(err){
    console.log(err);
}
}

updateDocument("61aa01ff91ff2f69419d5acf");