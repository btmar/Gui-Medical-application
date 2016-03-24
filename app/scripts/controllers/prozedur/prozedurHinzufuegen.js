angular.module('sbAdminApp')
.controller('ProzedurHinzufuegenCtrl', function ($state, $scope, serviceAjax) {
	
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

});