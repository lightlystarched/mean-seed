var mongoose = require('mongoose')
	, pc = mongoose.model('PlayerCharacter');

exports.index = function(req, res, next) {
	pc.find({}, function(err, rentals) {
		if (err) {
			console.log(err);
		}

		res.json(pc);
	});
}