
const express = require('express');
const ejs = require("ejs");
const app = express();
const https=require("https");
const requesthttps=require("request");


app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/home", function(req, res){
    res.render("home")
});

app.get("/records", function(req, res){
    res.render("records")
});

app.get("/explore", function(req, res){
    res.render("learn")
});

app.get("/know", function(req, res){
    res.render("know")
});

app.get("/knowmore", function(req, res){
    res.render("knowmore")
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d", this.address().port);
  });
  