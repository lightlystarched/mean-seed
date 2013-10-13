var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Description of PC attributes
var PlayerCharacters = new Schema({
	name: String,
	occupation: String,
	speed: Number
});

exports.PlayerCharacter = mongoose.model('PlayerCharacter', PlayerCharacters);