const mongoose = require("mongoose");

//Define the MongoDB URL
const mongoURL = "mongodb://localhost:27017/hotels";
//setup the mongodb connection
mongoose.connect(mongoURL, {});
//get the default connection
//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;
//Define event listeners for mongodb connections
db.on("connected", () => {
  console.log("connected to mongodb server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error", err);
});

db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
