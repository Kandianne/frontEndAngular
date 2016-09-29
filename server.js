"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.set('views', './views');
app.engine('.html', require('ejs').renderFile);
app.use(express.static('./public'));
app.use(express.static('./bower_components'));
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//-----------------------CONNECTION TO MONGO DATABASE-----------------------
// mongoose.connect(process.env.DATABASE_NAME, function(err) {
// 	if(err) return console.log("No connection");
// 	else{
// 		console.log("Success! You are connected to the database")
// 	}
// });

//======================SCHEMAS=================================
require("./models/UserModel");
require("./models/ChatModel");

//======================ROUTES=================================
var userRoutes = require('./routes/userRoutes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index');
});

//======================ROUTES TO USE=================================
app.use('/api/user/', userRoutes);


module.exports = app.listen(port, function() {
	console.log('Example app listening at http://localhost:' + port);
});
