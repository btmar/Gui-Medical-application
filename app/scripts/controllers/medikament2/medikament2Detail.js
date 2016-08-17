angular.module('sbAdminApp')
.controller('Medikament2DetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var title = $stateParams.title;
	serviceAjax.infoMedikament2(title).success(function(data){
		$scope.medikament2 = data;
		console.log(data);

	})
});