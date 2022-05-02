const express = require("express");
const router = express.Router();
const connection = require("../connection");

router.get("/", (req, res) => {
  const mysqlQuery = "SELECT * FROM MYPEOPLE";
  connection.query(mysqlQuery, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
      console.log("Query Executed Successfully");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
