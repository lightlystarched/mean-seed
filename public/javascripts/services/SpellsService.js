angular.module('rpg.spells', [])
.factory('SpellsService', function ($resource) {
  var Spells = $resource('/api/spells/:crud/:id');

  return {
    get: function (success, failure) {
      Spells.query(function (response) {
        return success(response);
      }, function (response) {
        throw response;
      });
    },
    create: function (spell, success) {
      var newSpell = new Spells(spell);

      newSpell.$save({
        crud: 'create'
      }, function (response) {
        return success(response);
      }, function (response) {
        throw response;
      });
    },
    edit: function (spell, success) {
      var newSpell = new Spells(spell);

      newSpell.$save({
        crud: 'update',
        id: spell._id
      }, function (response) {
        return success(response);
      }, function (response) {
        throw response;
      });
    }
  };
});