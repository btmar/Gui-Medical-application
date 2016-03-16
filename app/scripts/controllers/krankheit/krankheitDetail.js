angular.module('sbAdminApp')
.filter('nl2br', ['$sce', function ($sce) {
	return function (text) {
		return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';
	};
}])

.controller('KrankheitDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var title = $stateParams.title;

	serviceAjax.infoKrankheit(title).success(function(data){
		$scope.krankheit = data;
	})
});