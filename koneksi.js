var mysql = require ('mysql');

var db = mysql.createConnection({
    host: "remotemysql.com",
    user: "wAJsibpSOv",
    password: "lmQiJMOhzk",
    database: "wAJsibpSOv",
    timezone : "utc"

});


// db.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected!");
// });




module.exports = db;
