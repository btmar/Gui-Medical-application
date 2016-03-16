angular.module('sbAdminApp')
  .controller('KrankheitBearbeitenCtrl', function ($scope, $state, $stateParams, serviceAjax) {
        var title = $stateParams.title;

        serviceAjax.infoKrankheit(title).success(function(data){
            $scope.krankheit = data;
        })

        $scope.save = function(item, event) {
        formData = $scope.krankheit;

        serviceAjax.hinzuKrankheit(formData).success(function(data){
        	$state.go('dashboard.krankheit')

        })
    };
  });