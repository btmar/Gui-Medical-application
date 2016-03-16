angular.module('sbAdminApp')
  .controller('ProzedurBearbeitenCtrl', function ($scope, $state, $stateParams, serviceAjax) {
        var title = $stateParams.title;

        serviceAjax.infoProzedur(title).success(function(data){
            $scope.prozedur = data;
        })

        $scope.save = function(item, event) {
        formData = $scope.prozedur;

        serviceAjax.hinzuProzedur(formData).success(function(data){
        	$state.go('dashboard.prozedur')

        })
    };
  });