'use strict';

angular.module('sbAdminApp')
.controller('Medikament2Ctrl', function ($scope, serviceAjax) {


    var loadMedikament2s = function(){

        serviceAjax.prozed().success(function(data){
           $scope.medikament2s = data;
           $scope.viewbyP = 10;
           $scope.totalItemsP = $scope.medikament2s.length;
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

    $scope.removeItem = function(medikament2){
        console.log(medikament2);
        var index = $scope.medikament2s.indexOf(medikament2);
        serviceAjax.medikament2Entfernen(medikament2.title).success(function(){
            if (index !== -1) {
                $scope.medikament2s.splice(index, 1);
            }
        });
    }

    loadmedikament2s();

});