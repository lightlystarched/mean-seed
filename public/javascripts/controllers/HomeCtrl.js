define(['angular'], function(angular) {
	'use strict';

	return angular.module('basApp.controllers', [])
		.controller('HomeCtrl', ['$log', '$scope', function($log, $scope) {
			$log.debug('Home controller loaded');
			$scope.title = 'Welcome to your app!';
		}]);
});