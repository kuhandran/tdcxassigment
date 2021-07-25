var express = require("express");
var app = express();
var cors = require('cors');

app.use(cors());


app.listen(3001, () => {
    console.log("Server running on port 3000");
});

app.get("/login", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });