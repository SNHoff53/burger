// === Import the ORM to create functions that will interact with the database ===
var orm = require("../config/orm");

var burger = {
    all: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },
    create: function(cols, vals, callBack) {
        orm.create("burgers", cols, vals, function(res) {
            callBack(res);
        });
    },
    update: function(objColVals, condition, callBack) {
        orm.update("burgers", objColVals, condition, function(res) {
            callBack(res);
        });
    },
    delete: function(condition, callBack) {
        orm.delete("burgers", condition, function(res) {
            callBack(res);
        });
    }
};

module.exports = burger;