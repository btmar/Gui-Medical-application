angular.module('sbAdminApp')
.controller('MedikamentDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var pzn = $stateParams.pzn;
       // code=code.replace(".", "-");
	serviceAjax.infoMedikament(pzn).success(function(data){
		$scope.medikament = data;
		console.log(data);
	});
});