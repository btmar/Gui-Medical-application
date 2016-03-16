angular.module('sbAdminApp')
.controller('ProzedurHinzufuegenCtrl', function ($state, $scope, serviceAjax) {
	
	
	$scope.save = function(item, event) {
		formData = $scope.document;
		serviceAjax.hinzuProzedur(formData).success(function(data){
			$state.go('dashboard.prozedur')
			
		})
	};
	
});