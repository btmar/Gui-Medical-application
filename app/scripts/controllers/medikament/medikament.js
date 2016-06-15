var app = angular.module('sbAdminApp');

app.filter('startFrom', function() {
	return function(input, start) {
		if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});
app.controller('MedikamentCtrl', function ($scope, serviceAjax) {
	serviceAjax.medikament().success(function(data){
		$scope.medikaments = data;
		$scope.viewbyM = 10;
		$scope.totalItemsM = $scope.medikaments.length;
		$scope.currentPageM = 1;
		$scope.itemsPerPageM = $scope.viewbyM;
		$scope.maxSizeM = 5;

		$scope.setPageM = function (pageNo) {
			$scope.currentPageM = pageNo;
		};

		$scope.pageChangedM = function() {
			console.log('Page changed to: ' + $scope.currentPageM);
		};

		$scope.setItemsPerPageM = function(num) {
			$scope.itemsPerPageM = num;
			$scope.currentPageM = 1;
		}
	});
})