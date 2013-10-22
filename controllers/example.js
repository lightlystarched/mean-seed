var mongoose = require('mongoose')
	, Example = mongoose.model('Example');

// Create the 'get' method for retrieving data
exports.index = function(req, res, next) {
	Example.find({}, function(err, examples) {
		if (err) {
			console.log(err);
		}

		res.json(examples);
	});
}

// Create a new document in the DB
exports.create = function(req, res, next) {
	var newExample = new Example(req.body);
	newExample.save(function(err) {
		if (err) console.log(err);

		res.json(newExample);
	});
}

// Update an existing document
exports.update = function(req, res, next) {
	Example.update({_id: req.params.id}, req.body, function(err) {
		if (err) console.log(err);

		Example.findById(req.params.id, function(err, example) {
			if(err) console.log(err);

			res.json(example);
		});
	});
}