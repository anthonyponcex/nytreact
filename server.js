// Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));
app.use("/", routes);

var db = process.env.MONGODB_URI || "#######";
// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect(db, function(error){
  if (error) {
    console.log(error);
  } 
  else {
    console.log("mongoose connection successful")
  }
});

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
