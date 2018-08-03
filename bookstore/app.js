// to create package.json with 'npm init'
var express = require('express');

var app = express();

var bodyParse = require('body-parser');
// var mangoose = require('mangoose');

//connect to mangoose
// mangoose.connect('mongodb://localhost/bookstore');
// var db = mangoose.connection;
app.get('/', function(req, res) {
    res.send('Please use /api/books or /api/genres');
});

app.listen(3000);
console.log('Running on Port 3000...');
