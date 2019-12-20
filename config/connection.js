var mysql = require("mysql");

// === Setting up the connection ===
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

// === Making the connection ===
connection.connect(function(err) { 
    if (err) {
        console.log("Sorry, there is an error connecting: " + err.stack + "." + "Please check your connection.");
        return;
    }
    console.log("Connection was successful. Connected as id " + connection.threadId);
});

// === Exporting the connection for our ORM to use ===
module.exports = connection;