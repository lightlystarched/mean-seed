var controllers = require('./controllers')
	, RootController = controllers.RootController
	, PlayerCharacterController = controllers.PlayerCharacterController;

module.exports = function(app) {
	// Index - serves up the page that loads the angular app
	app.get('/', RootController.index);
	app.get('/player-characters', PlayerCharacterController.index);
}