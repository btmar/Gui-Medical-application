angular.module('sbAdminApp')
.controller('KrankheitHinzufuegenCtrl', function ($state, $scope, serviceAjax) {
	
	
	$scope.save = function(item, event) {
		formData = $scope.krankheit;
		serviceAjax.hinzuKrankheit(formData).success(function(data){
			$state.go('dashboard.krankheit')
			
		})
	};
	
});