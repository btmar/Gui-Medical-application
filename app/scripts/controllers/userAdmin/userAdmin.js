'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('userAdminCtrl', function ($scope, $state) {

    $scope.showUserData = function() {
        $state.go('dashboard.userData');
    };

    $scope.logOn = function() {
        $state.go('dashboard.userLogOn');
    };

    $scope.register = function() {
        $state.go('dashboard.userRegister');
    };
});