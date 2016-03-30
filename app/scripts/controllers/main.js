'use strict';

/**
 * @ngdoc function
 * @name easterEggsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easterEggsApp
 */
angular.module('easterEggsApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.sucessMessage = "";
    $scope.$parent.activeView = "main";

    $scope.isfound = function(message) {
        $scope.$apply(function() {
            $scope.sucessMessage = message;
        });
    }
  }]);
