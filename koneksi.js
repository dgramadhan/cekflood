var mysql = require ('mysql');

var db = mysql.createConnection({
    host: "databases.000webhost.com",
    user: "id13933173_database_pa",
    password: "5ilpZq!<@$H>v!GM",
    database: "id13933173_db_pa",
    timezone : 'utc'

});

// db.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected!");
// });

module.exports = db;
