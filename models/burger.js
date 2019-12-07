// === Import the ORM to create functions that will interact with the database ===
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },
    insertOne: function(columns, values, callBack) {
        orm.insertOne("burgers", columns, values, function(res) {
            callBack(res);
        });
    },
    updateOne: function(objColVals, condition, callBack) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callBack(res);
        });
    },
    deleteOne: function(condition, callBack) {
        orm.deleteOne("burgers", condition, function(res) {
            callBack(res);
        });
    }
};

module.exports = burger;