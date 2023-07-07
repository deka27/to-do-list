// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// Creating an instance of the Express application
const app = express();

// Array to store general items and work items
const items = ["Item 1", "Item 2"];
const workItems = [];

// Setting the view engine to EJS
app.set("view engine", "ejs");

// Configuring middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Handling GET request to the root route
app.get("/", function (req, res) {
  // Getting the current day from the date module
  const day = date.getDate();

  // Rendering the "list" view and passing data
  res.render("list", { listTitle: day, newListItems: items });
});

// Handling POST request to the root route
app.post("/", function (req, res) {
  // Retrieving the new item from the request body
  const item = req.body.newItem;

  // Checking the selected list and adding the item accordingly
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// Handling GET request to the "/work" route
app.get("/work", function (req, res) {
  // Rendering the "list" view for the work list and passing data
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

// Handling GET request to the "/about" route
app.get("/about", function (req, res) {
  // Rendering the "about" view
  res.render("about");
});

// Starting the server and listening on port 3000
app.listen(3000, function () {
  console.log("Server running at port 3000");
});
