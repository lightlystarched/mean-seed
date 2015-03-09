angular.module('rpg.controllers', [])
.controller('HomeController', function ($log, $scope, SpellsService) {
})
.controller('SpellsController', function ($log, $scope, Spells, SpellsService) {
  $log.debug('Spells: ', Spells);

  $scope.showForm = false;

  $scope.spells = angular.copy(Spells);
  /*angular.forEach($scope.spells, function (spell) {
    angular.forEach(spell.description, function (description) {
      $sce.trustAsHtml(description.text);
    });
  });*/

  $scope.defaultSpell = {
    meta: {
      cantrip: false,
      ritual: false,
      level: 0
    },
    components: {
      verbal: false,
      somatic: false,
      materials: []
    },
    description: []
  };

  $scope.editSpell = function(spell) {
    $scope.spell = spell;
    $scope.showForm = true;
  };

  $scope.update = function(spell) {
    $scope.defaultSpell = angular.copy(spell);
  };

  $scope.addNewInput = function (arr) {
    var newField = {text: ''};
    arr.push(newField);
  };

  $scope.reset = function(spell) {
    if (spell) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.spell = angular.copy($scope.defaultSpell);
  };

  $scope.submitSpell = function () {
    $log.debug('Spell: ', $scope.spell);
    if ($scope.spellForm.$valid) {
      $log.debug('Submitting spell: ', $scope.spellForm);
      if ($scope.spell._id) {
        SpellsService.edit($scope.spell, function (response) {
          console.log('Edited: ', response);
          $scope.reset();
          $scope.showForm = false;
        });
      } else {
        SpellsService.create($scope.spell, function (response) {
          console.log('REsponse: ', response);
          $scope.spells.push($scope.spell);
          $scope.reset();
          $scope.showForm = false;
        });
      }
    } else {
      $log.debug('Form invalid: ', $scope.spellForm);
    }
  };

  $scope.reset();
  //$scope.spell = angular.copy(defaultSpell);
});