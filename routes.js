var controllers = require('./controllers')
	, RootController = controllers.RootController
	, SpellController = controllers.SpellController
	, RaceController = controllers.RaceController
	, ClassController = controllers.ClassController
	, UserController = controllers.UserController;

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
};

module.exports = function(app) {
	// Index - serves up the page that loads the angular app
	app.get('/', /*isAuthenticated, */RootController.index);

	app.get('/login', UserController.login);

	// Setup the path for the partials
	app.get('/client/:name', RootController.clientView);

	// Setup routes for Spells
	app.get('/api/spells', /*isAuthenticated, */SpellController.index);
	app.post('/api/spells/create', /*isAuthenticated, */SpellController.create);
	app.post('/api/spells/update/:id', /*isAuthenticated, */SpellController.update);

	// Setup routes for Race api
	//app.get('/api/races', /*isAuthenticated, */RaceController.index);
	//app.post('/api/races/create', /*isAuthenticated, */RaceController.create);
	//app.post('/api/races/update/:id', /*isAuthenticated, */RaceController.update);

	// Setup routes for Class api
	//app.get('/api/classes', /*isAuthenticated, */ClassController.index);
	//app.post('/api/classes/create', /*isAuthenticated, */ClassController.create);
	//app.post('/api/classes/update/:id', /*isAuthenticated, */ClassController.update);
}