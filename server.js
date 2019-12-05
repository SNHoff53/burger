// === Declaring our variables ===
var express = require("express");

// === Setting up the Express App ===
var PORT = process.env.PORT || 3000;
var app = express();

// === Middleware -- serving static files ===
app.use(express.static("public"));

// === Parsing application body as a JSON ===
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// === Setting Handlebars ===
var exhbs = require("express-handlebars");

app.engine("handlebars", exhbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// === Import routes and give server access ===
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// === Starting the server so that it can begin listening to client requests ===
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
