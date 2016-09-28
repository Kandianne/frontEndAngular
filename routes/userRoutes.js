var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');


router.post('/', function(req, res) {
	var newCandy = new Candy(req.body);//creating a new candy object based on mongoose schema which I required at top of this page
	newCandy.save(function(err, result) {
		if(err) return res.status(500).send({err:'The server is having issues.'});
		if(!result) return res.status(400).send({err: 'Sorry, I could not create the candy product'});
		res.send();
	});
});

router.get('/', function(req, res) {
	Candy.find({})//finding all the candies in the database
	.exec(function(err, candies) {
		if(err) return res.status(500).send({err:'The server is having issues.'});
		if(!candies) return res.status(400).send({err: 'Sorry, I could not get the candies'});
		res.send(candies);
	});
});

router.get('/shoppingBasket', function(req, res) {
	Candy.find({addedToShoppingList: true})//finding only the candies that are marked to be added to shopping list
	.exec(function(err, shoppingBasket) {
		if(err) return res.status(500).send({err:'The server is having issues.'});
		if(!shoppingBasket) return res.status(400).send({err: 'Sorry, I could not get the candies'});
		res.send(shoppingBasket);
	});
});


module.exports = router;