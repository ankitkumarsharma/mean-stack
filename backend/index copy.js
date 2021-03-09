// add required modules
import express from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import mongo, { MongoClient } from 'mongodb';
mongo.MongoClient;

// add app with express framework
var app = express();

// body parser with app
app.use(urlencoded({extended: true}));
app.use(json())
app.use(cors());

// connect with mongo db
MongoClient.connect("mongodb://localhost:27017/dummy", function(err, db){
    if(err) {
        throw err;
    } else {
        console.log("DB Connected");
    }
});

// add port
const port = process.env.port || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}`));
