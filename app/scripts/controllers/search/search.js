'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('SearchCtrl', function ($scope, $state,ngDialog, $stateParams,serviceAjax) {

var searchWord = $stateParams.searchWord;
  var load = function(){
    $scope.krankheits = [];
    $scope.prozedurs = [];
    $scope.medikaments = [];


    serviceAjax.search(searchWord).success(function(data){
      console.log(data);
    $scope.krankheits = data.krankheiten;
    $scope.HauptKrankheits = data.HauptKrankheiten;
    $scope.NebenKrankheits = data.NebenKrankheiten;
    $scope.prozedurs = data.prozeduren;
    $scope.HauptProzedurs = data.HauptProzeduren;
    $scope.NebenProzedurs = data.NebenProzeduren;
    $scope.medikaments = data.medikamenten;
    $scope.HauptMedikaments = data.HauptMedikamenten;
    $scope.NebenMedikaments = data.NebenMedikamenten;
    });
  };

  

  load();
});