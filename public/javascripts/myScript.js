'use strict';

angular.module('rpgApp', [
  'ui.router'
])
.config(function ($logProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
  if (location.hostname === 'localhost') {
    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(false);
  } else {
    $logProvider.debugEnabled(false);
    $locationProvider.html5Mode(true);
  }

  var states = {},
    resolves = {};

  states = {
    home: {
      name: 'home',
      url: '/',
      templateUrl: '/client/home',
      controller: 'HomeController'
    },
    subhome: {
      name: 'home.subhome',
      url: '/test',
      parent: 'home',
      templateUrl: '/client/subhome'
    }
  };

  $urlRouterProvider.otherwise('/');

  angular.forEach(states, function (state) {
    console.log('State: ', state);
    $stateProvider.state(state);
  });
})
.controller('HomeController', function ($log) {
  $log.debug('Home controller enabled');
});