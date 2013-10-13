define(['angular'], function(angular) {
	'use strict';

	basApp.controller('HomeCtrl', ['$log', '$scope', function($log, $scope) {
			$scope.navActive = '';

			$scope.toggleNav = function() {
				if($scope.navActive === '') {
					$scope.navActive = 'active';
				} else {
					$scope.navActive = '';
				}
			};
		}]);
});