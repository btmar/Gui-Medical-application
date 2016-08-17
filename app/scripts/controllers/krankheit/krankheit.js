'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('KrankheitCtrl', function ($scope, serviceAjax) {


    var loadKrankheits = function () {
        $scope.krankheits = [];
        serviceAjax.krank().success(function (data) {
            $scope.krankheits = data;
            $scope.viewbyK = 10;
            $scope.totalItemsK = $scope.krankheits.length;
            $scope.currentPageK = 1;
            $scope.itemsPerPageK = $scope.viewbyK;
            $scope.maxSizeK = 5;
            $scope.setPageK = function (pageNoK) {
                $scope.currentPageK = pageNoK;
            };

            $scope.pageChangedK = function () {
                console.log('Page changed to: ' + $scope.currentPageK);
            };

            $scope.setItemsPerPageK = function (num) {
                $scope.itemsPerPageK = num;
                $scope.currentPageK = 1;
            }
        });
    };

    $scope.removeItem = function (krankheit) {
        var index = $scope.krankheits.indexOf(krankheit);
        serviceAjax.krankheitEntfernen(krankheit.title).success(function () {
            if (index !== -1) {
                $scope.krankheits.splice(index, 1);
            }
        });
    };

    loadKrankheits();
});