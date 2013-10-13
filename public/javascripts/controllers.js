define(['angular'], function(angular) {
	'use strict';

	return angular.module('basApp.controllers', [])
		.controller('HomeCtrl', ['$log', '$scope', function($log, $scope) {
			$scope.navActive = '';

			$scope.toggleNav = function() {
				if($scope.navActive === '') {
					$scope.navActive = 'active';
				} else {
					$scope.navActive = '';
				}
			};
		}])
		.controller('CharacterCtrl', ['$log', '$scope', function($log, $scope) {
			$log.debug('Sketch controller loaded');
		}]);
});