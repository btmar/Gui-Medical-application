angular.module('sbAdminApp')
.controller('Medikament2BearbeitenCtrl', function ($scope, $state, $stateParams, serviceAjax) {
    var title = $stateParams.title;

    serviceAjax.infoMedikament2(title).success(function(data){
        $scope.medikament2 = data;
        if ($scope.medikament2.date !== null){
            $scope.medikament2.date = new Date($scope.medikament2.date);
        }
    })

    $scope.save = function(item, event) {
        formData = $scope.medikament2;

        serviceAjax.hinzumedikament2(formData).success(function(data){
        	$state.go('dashboard.medikament2')

        })
    };
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        showWeeks: true
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };


    $scope.popup2 = {
        opened: false
    };
      // Editor options.
      $scope.options = {
        language: 'de'
    };

  // Called when the editor is completely ready.
  $scope.onReady = function () {
    // ...
};

});