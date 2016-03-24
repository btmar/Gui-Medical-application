'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('KrankheitCtrl', function ($scope, serviceAjax) {


  var loadKrankheits = function(){
    $scope.krankheits = [];
    serviceAjax.krank().success(function(data){
     $scope.krankheits = data;
    });
  };

  $scope.removeItem = function(krankheit){
    var index = $scope.krankheits.indexOf(krankheit);
    serviceAjax.krankheitEntfernen(krankheit.title).success(function(){
      if (index !== -1) {
        $scope.krankheits.splice(index, 1);
      }
    });
  };

  loadKrankheits();
});