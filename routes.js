var controllers = require('./controllers')
	, RootController = controllers.RootController
	, CharacterController = controllers.CharacterController;

module.exports = function(app) {
	// Index - serves up the page that loads the angular app
	app.get('/', RootController.index);
	// Setup the path for the partials
	app.get('/partials/:name', RootController.partials);

	// Setup routes for Example CRUD
	app.get('/examples', ExampleController.index);
	app.post('/examples', ExampleController.create);
	app.put('/examples/:id', ExampleController.update);
}