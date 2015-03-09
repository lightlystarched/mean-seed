var mongoose = require('mongoose')
  , User = mongoose.model('User');


exports.login = function (req, res, next) {
  res.render('login', {
    title: 'Please log in'
  });
}