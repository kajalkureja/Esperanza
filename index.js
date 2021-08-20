
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
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d", this.address().port);
  });
  