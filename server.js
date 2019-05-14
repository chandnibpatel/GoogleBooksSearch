const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Add routes, both API and view
app.use(routes);
// Database configuration with mongoose
//"mongodb://articalAdmin:Test123@ds149146.mlab.com:49146/heroku_5wbvcdnk/NewsScraper"
//var dbConnect = process.env.MONGODBURL ||"mongodb://localhost:27017/test123";
// mongoose.connect(dbConnect,{
//   useCreateIndex: true,
//   useNewUrlParser: true
// });
// //mongoose.connect("mongodb://localhost/mongoscraper");
// var db = mongoose.connection;

// // Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// // Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/googleBooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
// Show any mongoose errors
mongoose.connection.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
mongoose.connection.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
