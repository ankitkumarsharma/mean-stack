// add required modules
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb'); 
// import mongo, { MongoClient } from 'mongodb';
// mongo.MongoClient;

// add app with express framework
var app = express();
app.nodemon();
// body parser with app
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());

// connect with mongo db
mongo.connect("mongodb://localhost:27017/dummy", function(err, db){
    if(!err) {
        console.log("DB Connected");
    } else {
        throw err;
    }
});

// add port
const port = process.env.port || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}`));
