'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp', ["ng.ckeditor"]).controller('controller', ['$scope', function($scope) {
  $scope.htmlEditor = '...';
}]);