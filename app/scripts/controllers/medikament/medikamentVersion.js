'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('MedikamentVersionCtrl', function ($scope, serviceAjax) {



    serviceAjax.medikamentVersion().success(function (data) {
        $scope.versions = data;
        $scope.currentPageK = 1;
    });
    $scope.listVersion = function (version) {
        serviceAjax.medikamentVersionRead(version).success(function (data) {
            $scope.v = version;
            $scope.medikaments = data;
            $scope.currentPageM = 1;
            $scope.setItemsPerPageM = function (num) {
                $scope.itemsPerPageM = num;
                $scope.currentPageM = 1;
            };
        });
    };
});