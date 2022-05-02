const express = require('express');
const router = express.Router();
const connection = require('../connection');




router.get('/', (req, res) => {
    const mysqlQuery = 'SELECT * FROM TRAVELLERS';
    connection.query(mysqlQuery, (err, rows, fields) => {
        if(!err) {
            res.send(rows);
            console.log("Query Executed Successfully");
        }
        else {
            console.log(err);
        }
    })
})

router.post('/', (req, res) => {
    const travellersDetails = req.body;
    // const name = req.body.name;
    // const gender = req.body.gender;
    // const mode_of_transport = req.body.mode_of_transport;
    // const age = req.body.age;
    // const from_place = req.body.from_place;
    // const date_start = req.body.date_place;
    // const to_place = req.body.to_place;
    // const date_end = req.body.date_end;

    // const newTraveller = connection.query(`INSERT INTO TRAVELLERS VALUES("$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8")`, [name, gender, mode_of_transport, age, from_place, date_start, to_place, date_end]);
    connection.query(`INSERT INTO TRAVELLERS VALUES("${travellersDetails.name}", "${travellersDetails.gender}", "${travellersDetails.mode_of_transport}", "${travellersDetails.age}", "${travellersDetails.from_place}", "${travellersDetails.date_start}", "${travellersDetails.to_place}", "${travellersDetails.date_end}");`, travellersDetails, (err, data) => {
        if (err) throw err;
        console.log("INSERTED SUCCESSFULLY!!");
    })
    res.redirect('/');
    // res.json(newTraveller.rows[0]);

})

module.exports = router;

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