'use strict';

angular.module('sbAdminApp')
.controller('UpdateCtrl', function ($scope, serviceAjax) {


    var loadProzedurs = function(){

        serviceAjax.prozed().success(function(data){
           $scope.prozedurs = data;
           $scope.viewbyP = 10;
           $scope.totalItemsP = $scope.prozedurs.length;
           $scope.currentPageP = 1;
           $scope.itemsPerPageP = $scope.viewbyP;
           $scope.maxSizeP = 5; 

           $scope.setPageP = function (pageNoP) {
            $scope.currentPageP = pageNoP;
        };

        $scope.pageChangedP = function() {
            console.log('Page changed to: ' + $scope.currentPageP);
        };

        $scope.setItemsPerPageP = function(num) {
            $scope.itemsPerPageP = num;
            $scope.currentPageP = 1; 
        };


    });

    };
//
//    $scope.removeItem = function(prozedur){
//        console.log(prozedur);
//        var index = $scope.prozedurs.indexOf(prozedur);
//        serviceAjax.prozedurEntfernen(prozedur.title).success(function(){
//            if (index !== -1) {
//                $scope.prozedurs.splice(index, 1);
//            }
//        });
//    }

    loadProzedurs();

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
//
//    $scope.removeItem = function (krankheit) {
//        var index = $scope.krankheits.indexOf(krankheit);
//        serviceAjax.krankheitEntfernen(krankheit.title).success(function () {
//            if (index !== -1) {
//                $scope.krankheits.splice(index, 1);
//            }
//        });
//    };

    loadKrankheits();

});