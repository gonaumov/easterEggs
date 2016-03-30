'use strict';

/**
 * @ngdoc function
 * @name easterEggsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the easterEggsApp
 */
angular.module('easterEggsApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
      $scope.$parent.activeView = "about";
  }]);
