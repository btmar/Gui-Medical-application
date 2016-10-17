angular.module('sbAdminApp')
.controller('KrankheitDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var title = $stateParams.title;

	serviceAjax.infoKrankheit(title).success(function(data){
		$scope.krankheit = data;
	});
});