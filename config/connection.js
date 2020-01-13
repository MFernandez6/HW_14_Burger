var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localHost",
    user: "root",
    password: "123456",
    database: "burgers_db"
});
connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;