var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// An example of creating a basic Mongo Schema
var Spells = new Schema({
	title: String,
  casting: {
    duration: Number,
    unit: String
  },
  meta: {
    school: String,
    level: Number,
    cantrip: Boolean,
    ritual: Boolean
  },
  range: {
    distance: Number,
    units: String
  },
  components: {
    verbal: Boolean,
    somatic: Boolean,
    materials: [{ text: String }]
  },
  duration: Number,
  description: [{ text: String }]
});

exports.Spell = mongoose.model('Spells', Spells);