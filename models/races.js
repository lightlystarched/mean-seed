var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

// An example of creating a basic Mongo Schema
var Races = new Schema({});

exports.Race = mongoose.model('Race', Races);