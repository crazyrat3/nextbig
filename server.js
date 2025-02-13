const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to my hotel how can i help you...");
});

//import the router files
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuItemRoutes");
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
