'use strict';

angular.module('rpgApp', [
  'ui.router',
  'ngResource',
  'rpg.controllers',
  'rpg.spells'
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

  resolves = {
    spells: function ($1) {
      var defer = $q.defer();

      defer.resolve({result: 'Spells'});

      return defer.promise;
    }
  }

  states = {
    home: {
      name: 'home',
      url: '/',
      templateUrl: '/client/home',
      controller: 'HomeController'
    },
    spells: {
      name: 'spells',
      url: '/spells',
      templateUrl: '/client/spells',
      controller: 'SpellsController',
      resolve: {
        Spells: function ($q, SpellsService) {
          var deferred = $q.defer();

          SpellsService.get(function (response) {
            deferred.resolve(response);
          });

          return deferred.promise;
        }
      }
    }
  };

  $urlRouterProvider.otherwise('/');

  angular.forEach(states, function (state) {
    console.log('State: ', state);
    $stateProvider.state(state);
  });
})
.filter('trustHtml', ['$sce', function($sce){
  return function(text) {
      return $sce.trustAsHtml(text);
  };
}])
.filter('formatLevel', function() {
  return function (num) {
    switch (num) {
      case 1:
        return '1st-level';
      case 2:
        return '2nd-level';
      case 3:
        return '3rd-level';
      default:
        return num + 'th-level';
    }
  };
});