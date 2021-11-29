const express = require("express");
const app = express();
const { dirname } = require("path");

//midileware----
const path = require("path");
const staticpath = path.join(__dirname, "../public");

//set function----
app.set("view engine", "hbs");

app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.write("<h1>Home</h1>");
  res.send();
});

app.get("/about", (req, res) => {
    res.write("<h1>About</h1>");
    res.send();
});

app.get("/json", (req, res) => {
  res.send({
    id: 1,
    name: "xyz",
  });
});

app.listen(3030, () => {
  console.log("server is running");
});
