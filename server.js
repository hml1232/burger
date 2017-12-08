//pull in required dependices 
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = 3000;

//to connect css to the page
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

//view engine is used for modernization and to create dynamic html
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
