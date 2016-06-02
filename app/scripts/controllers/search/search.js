'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('SearchCtrl', function ($scope, $state,ngDialog, $stateParams,serviceAjax) {

var searchWord = $stateParams.searchWord;
  var load = function(){
    $scope.krankheits = [];
    $scope.prozedurs = [];
    serviceAjax.search(searchWord).success(function(data){
    $scope.krankheits = data.krankheiten;
    $scope.HaufKrankheits = data.HaufKrankheiten;
    $scope.prozedurs = data.prozeduren;

    });
  };

  

  load();
});