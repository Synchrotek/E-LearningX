const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e-learningx",
});

app.post('/signup', (req, res) => {
    const sqlCmd = "INSERT INTO login (`name`, `ph_no`, `username`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.phNo,
        req.body.email,
        req.body.password
    ]
    db.query(sqlCmd, [values], (err, data) => {
        // console.log(sqlCmd, [values]);
        console.log(data);
        if (err) return res.json("Error");
        return res.json(data.body);
    });
})

app.post('/login', (req, res) => {
    const sqlCmd = "SELECT * FROM login WHERE `username` = (?) AND `password` = (?)";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sqlCmd, [req.body.email, req.body.password], (err, data) => {
        // console.log(data);
        if (err) return res.json("Error");
        if (data.length > 0)
            return res.json("Success")
        else return res.json("Failed");
    });
})

app.listen(8081, () => {
    console.log("Listening..");
});
