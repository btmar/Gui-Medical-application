'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('ICDNummerVersionCtrl', function ($scope, serviceAjax) {



    serviceAjax.icdnummerVersion().success(function (data) {
        $scope.versions = data;
        $scope.viewbyK = 10;
        $scope.totalItemsK = $scope.versions.length;
        $scope.currentPageK = 1;
        $scope.itemsPerPageK = $scope.viewbyK;
        $scope.maxSizeK = 5;
        $scope.setPageK = function (pageNoK) {
            $scope.currentPageK = pageNoK;
            console.log(data);
        };

        $scope.pageChangedK = function () {
            console.log('Page changed to: ' + $scope.currentPageK);
        };

        $scope.setItemsPerPageK = function (num) {
            $scope.itemsPerPageK = num;
            $scope.currentPageK = 1;
        }
    });
    $scope.listVersion = function (version) {
        serviceAjax.icdnummerVersionRead(version).success(function (data) {
            $scope.v = version;
            console.log(data);
            $scope.ICDNummers = data;
            $scope.viewbyM = 10;
            $scope.totalItemsM = $scope.ICDNummers.length;
            $scope.currentPageM = 1;
            $scope.itemsPerPageM = $scope.viewbyM;
            $scope.maxSizeM = 5;

            $scope.setPageM = function (pageNo) {
                $scope.currentPageM = pageNo;
            };

            $scope.pageChangedM = function () {
                console.log('Page changed to: ' + $scope.currentPageM);
            };

            $scope.setItemsPerPageM = function (num) {
                $scope.itemsPerPageM = num;
                $scope.currentPageM = 1;
            }
        });
    };
});