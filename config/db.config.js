const mysql = require("mysql");

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "node_mysql_crud_db"
});

dbConn.connect((error) => {
    if (error) console.log("ERROR : ", error);
    else console.log("Database connnected successfully");
})

module.exports = dbConn;