angular.module('sbAdminApp')
.controller('IcdDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var code = $stateParams.code;
code=code.replace(".", "-");
	serviceAjax.infoIcd(code).success(function(data){
		$scope.icd = data;
		console.log(data);
	})
});