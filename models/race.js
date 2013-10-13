var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Races = new Schema({
	name: String,
	description: String
});

exports.Race = mongoose.model('Race', Races);