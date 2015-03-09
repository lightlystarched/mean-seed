var mongoose = require('mongoose')
	, Spell = mongoose.model('Spells');

// Create the 'get' method for retrieving data
exports.index = function(req, res, next) {
	Spell.find({}, function(err, spells) {
		if (err) {
			console.log(err);
		}

		res.json(spells);
	});
}

// Create a new document in the DB
exports.create = function(req, res, next) {
	var newSpell = new Spell(req.body);
	newSpell.save(function(err) {
		if (err) console.log(err);

		res.json(newSpell);
	});
}

// Update an existing document
exports.update = function(req, res, next) {
	Spell.update({_id: req.params.id}, req.body, function(err) {
		if (err) console.log(err);

		Spell.findById(req.params.id, function(err, spell) {
			if(err) console.log(err);

			res.json(spell);
		});
	});
}