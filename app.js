var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  db = require("./models/index.js"),
  app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
// add middleware to handle overriding POST requests
// for both PUT and DELETE
app.use(methodOverride("_method"));
// serve all public files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.redirect("index")
});

app.get('/index', function(req, res) {
  db.post.findAll().success(function(posts) {
    res.render("index", {posts: posts});
  })
});

app.listen(3000, function(){
  console.log("SERVER listening on 3000")
})