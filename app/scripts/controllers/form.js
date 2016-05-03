'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
.controller('CkeditorCtrl', ['$scope', function ($scope) {

  // Editor options.
  $scope.options = {
    language: 'de'
  };

  // Called when the editor is completely ready.
  $scope.onReady = function () {
    // ...
  };
}]);