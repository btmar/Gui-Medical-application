'use strict';

angular.module('sbAdminApp')
.controller('ProzedurCtrl', function ($scope, serviceAjax) {


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

    $scope.removeItem = function(prozedur){
        console.log(prozedur);
        var index = $scope.prozedurs.indexOf(prozedur);
        serviceAjax.prozedurEntfernen(prozedur.title).success(function(){
            if (index !== -1) {
                $scope.prozedurs.splice(index, 1);
            }
        });
    }

    loadProzedurs();

});