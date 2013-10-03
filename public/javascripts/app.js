define([
	'angular',
	'controllers',
	'uiRouter'
	], function(angular) {
		'use strict';

		return angular.module('basApp', [
			'ui.router',
			'basApp.controllers'
		]);
	})