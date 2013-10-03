define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$logProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function($logProvider, $httpProvider, $stateProvider, $urlRouterProvider) {

		var states = {},
			resolves = {};

		$logProvider.debugEnabled(true);

		$urlRouterProvider
			.when('', '/')
			.otherwise('/');

		resolves = {};

		states = {
			home: {
				name: 'home',
				url: '/',
				controller: 'HomeCtrl',
				templateUrl: '/partials/home'
			}
		};

		$stateProvider
			.state(states.home);

	}]);
});