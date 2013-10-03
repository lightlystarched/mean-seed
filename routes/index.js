
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

  // serve up the partials folder for Angular consumption
	app.get('/partials/:name', function (req, res) {
		var name = req.params.name;
		res.render('partials/' + name);
	});
	
};