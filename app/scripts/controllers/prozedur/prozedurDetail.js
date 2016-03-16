angular.module('sbAdminApp')
.filter('nl2br', ['$sce', function ($sce) {
	return function (text) {
		return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';
	};
}])
.controller('ProzedurDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var title = $stateParams.title;
	console.log(title);
	serviceAjax.infoProzedur(title).success(function(data){
		$scope.prozedur = data;
		console.log(data);

	})
});