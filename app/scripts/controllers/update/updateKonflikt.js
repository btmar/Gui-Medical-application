'use strict';

angular.module('sbAdminApp')
        .controller('UpdateKonfliktCtrl', function ($scope, serviceAjax) {


            var loadProzedursU = function () {

                serviceAjax.prozedUpdate().success(function (data) {
                    $scope.prozedurs = data;
                    $scope.viewbyPU = 10;
                    $scope.totalItemsPU = $scope.prozedurs.length;
                    $scope.currentPagePU = 1;
                    $scope.itemsPerPagePU = $scope.viewbyPU;
                    $scope.maxSizePU = 5;
                    $scope.setPagePU = function (pageNoPU) {
                        $scope.currentPagePU = pageNoPU;
                    };

                    $scope.pageChangedPU = function () {
                        console.log('Page changed to: ' + $scope.currentPagePU);
                    };

                    $scope.setItemsPerPagePU = function (num) {
                        $scope.itemsPerPagePU = num;
                        $scope.currentPagePU = 1;
                    };
                });
            };

            loadProzedursU();

            var loadKrankheits = function () {
                $scope.krankheits = [];
                serviceAjax.krankUpdate().success(function (data) {
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
            loadKrankheits();
        });