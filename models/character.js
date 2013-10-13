var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Description of PC attributes
var Characters = new Schema({
	name: String,
	occupation: String,
	speed: Number,
	race: String,
	sex: String
});

exports.Character = mongoose.model('Character', Characters);