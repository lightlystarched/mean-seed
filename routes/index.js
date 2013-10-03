
/*
 * GET home page.
 */

module.exports.create = function(app){

	// Create the index page route
  app.get('/', function (req, res) {
		res.render('index', {
			title: "Home"
		});
  });
};