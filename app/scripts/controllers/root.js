'use strict';

/**
 * @ngdoc function
 * @name easterEggsApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the easterEggsApp
 */
angular.module('easterEggsApp')
  .controller('RootCtrl', ["$scope", function ($scope) {
      $scope.activeView = "";
  }]);
