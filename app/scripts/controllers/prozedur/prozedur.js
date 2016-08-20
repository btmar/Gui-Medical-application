'use strict';

angular.module('sbAdminApp')
        .controller('ProzedurCtrl', function ($scope, serviceAjax, ngDialog) {


            var loadProzedurs = function () {

                serviceAjax.prozed().success(function (data) {
                    $scope.prozedurs = data;
                    $scope.viewbyP = 10;
                    $scope.totalItemsP = $scope.prozedurs.length;
                    $scope.currentPageP = 1;
                    $scope.itemsPerPageP = $scope.viewbyP;
                    $scope.maxSizeP = 5;

                    $scope.setPageP = function (pageNoP) {
                        $scope.currentPageP = pageNoP;
                    };

                    $scope.pageChangedP = function () {
                        console.log('Page changed to: ' + $scope.currentPageP);
                    };

                    $scope.setItemsPerPageP = function (num) {
                        $scope.itemsPerPageP = num;
                        $scope.currentPageP = 1;
                    };


                });

            };

            $scope.removeItem = function (prozedur) {
                $scope.pr = prozedur;

                ngDialog.openConfirm({template: 'views/entfernenPopup.html',
                    scope: $scope //Pass the scope object if you need to access in the template
                })
            };

            $scope.entfernen = function () {
                var index = $scope.prozedurs.indexOf($scope.pr);
                serviceAjax.prozedurEntfernen($scope.pr.title).success(function () {
                    if (index !== -1) {
                        $scope.prozedurs.splice(index, 1);
                    }
                    ngDialog.closeAll();
                });
            };

            $scope.cancel = function () {
                ngDialog.closeAll();
            };

            loadProzedurs();

        });