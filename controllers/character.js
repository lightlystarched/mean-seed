var mongoose = require('mongoose')
	, Character = mongoose.model('Character');

exports.index = function(req, res, next) {
	Character.find({}, function(err, characters) {
		if (err) {
			console.log(err);
		}

		res.json(characters);
	});
}

exports.create = function(req, res, next) {
	var newCharacter = new Character(req.body);
	newCharacter.save(function(err) {
		if (err) console.log(err);

		res.json(newCharacter);
	});
}

exports.update = function(req, res, next) {
	Character.update({_id: req.params.id}, req.body, function(err) {
		if (err) console.log(err);

		Character.findById(req.params.id, function(err, character) {
			if(err) console.log(err);

			res.json(character);
		})
	})
	});
}