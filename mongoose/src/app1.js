const mongoose = require("mongoose");
//const server ="127.0.0.1:27017";

//create database----
mongoose
  .connect("mongodb://localhost:27017/testingDB")
  .then(() => console.log("successful---"))
  .catch((err) => console.log(err));

//schema--> structures of documents
const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    minlength: [2, "minimum two letters"],
    maxlength: 30,
  },
  email:{
     type: String,
     required:true,
     unique:true,
     validate(value){
         if (!validator.isEmail(value)) {
             throw new mongoose.Error("Email is not valid")
         }
     }
    
    },
  mobile: Number,
  city: String,
  active: Boolean,
});

//collection creation----
//models-->is a wrapper of mongoose schema
//items--document name
const PlayList = new mongoose.model("Items", playListSchema);

//create doccument or insert

//-----
const createElement = async () => {
  try {
    const reactPlayList = new PlayList({
      name: "Jabalpur Train",
      mobile: 01010101,
      city: "Jabalpur",
      email:"rriii@test.com",
      active: true,
    });

    // reactPlayList.save();
    //async await bcoz return promise--
    const result = await reactPlayList.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createElement();
