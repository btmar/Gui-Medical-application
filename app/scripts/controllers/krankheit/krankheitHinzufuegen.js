angular.module('sbAdminApp')
.controller('KrankheitHinzufuegenCtrl', function ($state,ngDialog, $scope, serviceAjax) {
	
	
	$scope.save = function(item, event) {
		formData = $scope.krankheit;
		console.log(formData);
		formData.prozedur = $scope.prozedur;
		serviceAjax.hinzuKrankheit(formData).success(function(data){
			$state.go('dashboard.krankheit')
			
		})
	};
	var loadProzedurs = function(){

		serviceAjax.prozed().success(function(data){
         $scope.prozedurs = data;

     });

	};
	$scope.openProzedurForm = function() {
		loadProzedurs();

		console.log("Ich bin da");
		ngDialog.openConfirm({template: 'views/krankheit/prozedurForm.html',
      scope: $scope //Pass the scope object if you need to access in the template
  }).then(
  function(value) {

  },
  function(value) {
        //Cancel or do nothing
    }
    );
};

$scope.checkProzedur = function(prozedur){

	$scope.prozedur=prozedur;
	ngDialog.closeAll();
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

});