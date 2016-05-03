'use strict';

angular.module('sbAdminApp')
.controller('ProzedurCtrl', function ($scope, serviceAjax) {


    var loadProzedurs = function(){

        


        serviceAjax.prozed().success(function(data){
         //   $scope.loading = true;
         $scope.prozedurs = data;
        console.log(data);
               // $scope.loading = false;


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