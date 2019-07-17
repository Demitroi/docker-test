// app.js

const mysql = require('mysql');

const con = mysql.createConnection({

host: "localhost",

port: 8001,

user: "root",

password: "pokemon",

database: 'customer'

});

con.connect(function (err) {

if (err) throw err;
 console.log("Connected!");
});

const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello Demitroi'))

app.get("/docker", (req, res) => {

    res.send("hello from docker");
  
  });

app.get('/nodemon', (req, res) => res.send('hello from nodemon'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))