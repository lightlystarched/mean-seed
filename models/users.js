var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// An example of creating a basic Mongo Schema
var Users = new Schema({
	username: String,
  password: String
});

exports.User = mongoose.model('User', Users);