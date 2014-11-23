var controllers = require('./controllers')
	, RootController = controllers.RootController
	, ExampleController = controllers.ExampleController;

module.exports = function(app) {
	// Index - serves up the page that loads the angular app
	app.get('/', RootController.index);
	// Setup the path for the partials
	app.get('/client/:name', RootController.clientView);

	// Setup routes for Example CRUD
	app.get('/examples', ExampleController.index);
	app.post('/examples', ExampleController.create);
	app.put('/examples/:id', ExampleController.update);
}