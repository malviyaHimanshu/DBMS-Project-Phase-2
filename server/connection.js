const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "astronaut",
  database: "nodejs",
  multipleStatements: true,
});

connection.connect((err) => {
//   if (err) {
//     console.log(err.message);
//     console.log("Connection Failed.");
//   } else {
//     console.log("Connected :)");
//   }
    if(err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS MYPEOPLE (Name VARCHAR(30), Gender VARCHAR(10), Mode_of_transport VARCHAR(10), Age INT, From_place VARCHAR(20), Date_start DATE, To_place VARCHAR(20), Date_end DATE)";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table Created :))) ");
    })
});

module.exports = connection;


// CREATE TABLE TRAVELLERS(
//     Name                VARCHAR(30),
//     Gender              VARCHAR(10),
//     Mode_of_Transport   VARCHAR(10),
//     Age                 INT,
//     From_place          VARCHAR(20),
//     Date_start          DATE,
//     To_place            VARCHAR(20),
//     Date_end            DATE
// );