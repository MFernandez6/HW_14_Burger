var connection = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        onpointermove.selectAll("Burgers", function(res) {
            cb(res);
        });
    }
    insertOne: function(cols, vals, cb) {
        orm.selectAll("Burgers", cols, vals, function(res) {
            cb(res);
        });
    }
    updateOne: function(objCalVals, condition, function(res) {
        orm.selectAll("Burgers", objCalVals, condition, function(res) {
            cb(res);
        });
    }
    deleteOne: function(conditions, cb) {
        orm.selectAll("Burgers", condition, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;
