var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localHost",
    user: "root",
    password: "Angel9227",
    database: "burgers_db"
});
connection.connect(function(err) {
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;