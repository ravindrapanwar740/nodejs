var express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose =
		require("passport-local-mongoose"),
	User = require("./models/user");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/", function (req, res) {
	res.render("home");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
	res.render("secret");
});

// Showing register form
app.get("/register", function (req, res) {
	res.render("register");
});

// Handling user signup
app.post("/register", function (req, res) {
	var username = req.body.username
	var password = req.body.password
	User.register(new User({ username: username }),
			password, function (err, user) {
		if (err) {
			console.log(err);
			return res.render("register");
		}

		passport.authenticate("local")(
			req, res, function () {
			res.render("secret");
		});
	});
});

//Showing login form
app.get("/login", function (req, res) {
	res.render("login");
});

//Handling user login
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function (req, res) {
});

//Handling user logout
app.get("/logout", function (req, res) {
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
});

























// const express               =  require('express'),
//       app                   =  express(),
//       mongoose              =  require("mongoose"),
//       passport              =  require("passport"),
//       bodyParser            =  require("body-parser"),
//       LocalStrategy         =  require("passport-local"),
//       passportLocalMongoose =  require("passport-local-mongoose"),
//       User                  =  require("./user");


// //Connecting database
// mongoose.connect("mongodb://localhost/auth_demo");

// app.use(require("express-session")({
//     secret:"Any normal Word",       //decode or encode session
//     resave: false,          
//     saveUninitialized:false    
// }));

// // passport.serializeUser(User.serializeUser());       //session encoding
// // passport.deserializeUser(User.deserializeUser());   //session decoding
// // passport.use(new LocalStrategy(User.authenticate()));
// app.set("view engine","ejs");
// app.use(bodyParser.urlencoded(
//       { extended:true }
// ))
// app.use(passport.initialize());
// app.use(passport.session());

// //=======================
// //      R O U T E S
// //=======================

// app.get("/", (req,res) =>{
//     res.render("home");
// })

// app.get("/userprofile",isLoggedIn ,(req,res) =>{
//     res.render("userprofile");
// })
// //Auth Routes
// app.get("/login",(req,res)=>{
//     res.render("login");
// });

// app.post("/login",passport.authenticate("local",{
//     successRedirect:"/userprofile",
//     failureRedirect:"/login"
// }),function (req, res){

// });

// app.get("/register",(req,res)=>{
//     res.render("register");
// });

// app.post("/register",(req,res)=>{
    
//     User.register(new User({username: req.body.username,phone:req.body.phone,telephone: req.body.telephone}),req.body.password,function(err,user){
//         if(err){
//             console.log(err);
//             res.render("register");
//         }
//     passport.authenticate("local")(req,res,function(){
//         res.redirect("/login");
//     })    
//     })
// })

// app.get("/logout",(req,res)=>{
//     req.logout();
//     res.redirect("/");
// });

// function isLoggedIn(req,res,next) {
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/login");
// }


// //Listen On Server


// app.listen(process.env.PORT ||3030,function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("Server Started At Port 3030");
//     }
      
// });