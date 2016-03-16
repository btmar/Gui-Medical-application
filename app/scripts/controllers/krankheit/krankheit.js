'use strict';

angular.module('sbAdminApp')
.controller('KrankheitCtrl', function ($scope, serviceAjax) {


  var loadKrankheits = function(){

    


    serviceAjax.krank().success(function(data){
         //   $scope.loading = true;
         $scope.krankheits = data;
               // $scope.loading = false;


             });

  };

  $scope.removeItem = function(krankheit){
    console.log(krankheit);
    var index = $scope.krankheits.indexOf(krankheit);
    serviceAjax.krankheitEntfernen(krankheit.title).success(function(){
      if (index !== -1) {
        $scope.krankheits.splice(index, 1);
      }
    });
  }

  loadKrankheits();

});