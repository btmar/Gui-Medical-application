'use strict';

angular.module('sbAdminApp')
.controller('Medikament2Ctrl', function ($scope, serviceAjax) {


    var loadmedikament2s = function(){

        serviceAjax.medika2().success(function(data){
           $scope.medikament2s = data;
           $scope.viewbyM2 = 10;
           $scope.totalItemsM2 = $scope.medikament2s.length;
           $scope.currentPageM2 = 1;
           $scope.itemsPerPageM2 = $scope.viewbyM2;
           $scope.maxSizeM2 = 5; 

           $scope.setPageM2 = function (pageNoP) {
            $scope.currentPageM2 = pageNoP;
        };

        $scope.pageChangedM2 = function() {
            console.log('Page changed to: ' + $scope.currentPageM2);
        };

        $scope.setItemsPerPageM2 = function(num) {
            $scope.itemsPerPageM2 = num;
            $scope.currentPageM2 = 1; 
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