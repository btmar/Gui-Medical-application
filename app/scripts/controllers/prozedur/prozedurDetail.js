angular.module('sbAdminApp')
.controller('ProzedurDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var title = $stateParams.title;
	serviceAjax.infoProzedur(title).success(function(data){
		$scope.prozedur = data;
		console.log(data);

	})
});