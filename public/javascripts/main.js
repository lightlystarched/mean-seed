require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router'
	},
	baseUrl: 'javascripts',
	shim: {
		'angular' : {'exports' : 'angular'},
		'uiRouter': ['angular']
	},
	priority: [
		'angular'
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
	'angular',
	'app'
], function(angular, app) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});