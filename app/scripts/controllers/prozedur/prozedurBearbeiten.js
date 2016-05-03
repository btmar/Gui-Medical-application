angular.module('sbAdminApp')
.controller('ProzedurBearbeitenCtrl', function ($scope, $state, $stateParams, serviceAjax) {
    var title = $stateParams.title;

    serviceAjax.infoProzedur(title).success(function(data){
        $scope.prozedur = data;
        if ($scope.prozedur.date !== null){
            $scope.prozedur.date = new Date($scope.prozedur.date);
        }
    })

    $scope.save = function(item, event) {
        formData = $scope.prozedur;

        serviceAjax.hinzuProzedur(formData).success(function(data){
        	$state.go('dashboard.prozedur')

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