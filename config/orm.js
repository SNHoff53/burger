// === Importing MySQL connection ===
var connection = require("./connection.js");

// === Object for all our SQL statement functions ===
var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    insertOne: function(table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    updateOne: function(table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    }
};

module.exports = orm;