var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

// An example of creating a basic Mongo Schema
var Classes = new Schema({});

exports.Class = mongoose.model('Class', Classes);