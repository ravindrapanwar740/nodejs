const express=require('express')
const app = express();
const {dirname} =require('path')
const path=require('path')
//
const staticpath = path.join(__dirname, "../public");

//app.use(express.static(staticpath))

//call hbs
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index',{name:'hdh'})
})

// app.get('',(req,res)=>{
// res.send('Home!!!!!')
// })


app.listen(3000,()=>{
    console.log("Server is running----")
})


//Dynamic content-----

// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!' })
//   })