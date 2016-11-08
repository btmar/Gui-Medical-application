angular.module('sbAdminApp')

.controller('ImageDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var title = $stateParams.title;

	serviceAjax.infoImage(title).success(function(data){
            console.log(data);
		$scope.image = data.image;
	});
    });
