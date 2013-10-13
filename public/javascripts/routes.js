define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$logProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function($logProvider, $httpProvider, $stateProvider, $urlRouterProvider) {

		var states = {},
			resolves = {};

		$logProvider.debugEnabled(true);

		$urlRouterProvider
			.when('', '/')
			.otherwise('/');

		// Describe the resolves object for loading data before state change
		resolves = {};

		// Describe the various states of the application
		states = {
			home: {
				name: 'home',
				url: '/',
				controller: 'HomeCtrl',
				templateUrl: '/partials/home'
			},
			characters: {
				name: 'characters',
				url: '/characters',
				controller: 'CharacterCtrl',
				templateUrl: '/partials/characters'
			}
		};

		// Inject the
		$stateProvider
			.state(states.home)
			.state(states.characters);

	}]);
});