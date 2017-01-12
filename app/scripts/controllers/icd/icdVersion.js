'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('ICDNummerVersionCtrl', function ($scope, serviceAjax) {



    serviceAjax.icdnummerVersion().success(function (data) {
        $scope.versions = data;
        $scope.currentPageV = 1;
    });
    $scope.listVersion = function (version) {
        serviceAjax.icdnummerVersionRead(version).success(function (data) {
            $scope.v = version;
            $scope.ICDNummers = data;
            $scope.currentPageM = 1;
        });
    };
});