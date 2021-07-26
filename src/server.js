var express = require("express");
var cors = require('cors');
var app = express();
var fs = require('fs');

// const MongoClient = require('mongodb').MongoClient

app.use(cors());

app.use(express.json())


app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.post("/login", (req, res, next) => {
    var data = require("./mocks/users/index.json"); // path of your json file
    res.json(data);
});

app.post("/tasks", (req, res, next) => {
    var data = require("./mocks/tasks/index.json"); // path of your json file
    res.json(data);
});