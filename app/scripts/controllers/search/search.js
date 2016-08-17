'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('SearchCtrl', function ($scope, $state,ngDialog, $stateParams,serviceAjax) {

var searchWord = $stateParams.searchWord;
  var load = function(){
    $scope.krankheits = [];
    $scope.prozedurs = [];
    $scope.medikament2s = [];
    serviceAjax.search(searchWord).success(function(data){
      console.log(data);
    $scope.krankheits = data.krankheiten;
    $scope.HauptKrankheits = data.HauptKrankheiten;
    $scope.NebenKrankheits = data.NebenKrankheiten;
    $scope.prozedurs = data.prozeduren;
    $scope.HauptProzedurs = data.HauptProzeduren;
    $scope.NebenProzedurs = data.NebenProzeduren;
    $scope.medikament2s = data.medikament2en;
    $scope.HauptMedikament2s = data.HauptMedikament2en;
    $scope.NebenMedikament2s = data.NebenMedikament2en;
    });
  };

  

  load();
});