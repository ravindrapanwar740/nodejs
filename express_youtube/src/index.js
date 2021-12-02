const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
 // http://localhost:8000/about?name:ravi
  console.log(req.query);

  console.log("name:",req.query.name);
  console.log("city:",req.query.city);

    res.send("about page!!")
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})