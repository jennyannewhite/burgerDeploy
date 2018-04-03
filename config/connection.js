// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gdg6zi27nirvenzz',
        password: 'wyug7iyaquve28gf',
        database: 'ebo96p5xcc1s4raa'
    });
};
// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;