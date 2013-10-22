var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// An example of creating a basic Mongo Schema
var Examples = new Schema({
	name: String,
	occupation: String,
	age: Number
});

exports.Example = mongoose.model('Example', Examples);