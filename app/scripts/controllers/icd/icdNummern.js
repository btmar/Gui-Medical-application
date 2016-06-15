
var app = angular.module('sbAdminApp');

app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});
app.controller('IcdNummernCtrl', function ($scope, serviceAjax) {

    serviceAjax.icdNeben().success(function (data) {
        $scope.icdNebens = data;
        $scope.viewbyN = 10;
        $scope.totalItemsN = $scope.icdNebens.length;
        $scope.currentPageN = 1;
        $scope.itemsPerPageN = $scope.viewbyN;
        $scope.maxSizeN = 4; //Number of pager buttons to show

        $scope.setPageN = function (pageNoN) {
            $scope.currentPageN = pageNoN;
        };

        $scope.pageChangedN = function () {
            console.log('Page changed to: ' + $scope.currentPageN);
        };

        $scope.setItemsPerPageN = function (num) {
            $scope.itemsPerPageN = num;
            $scope.currentPageN = 1; //reset to first paghe
        }
    })
    serviceAjax.icdHaupt().success(function (data) {
        $scope.icdHaupts = data;
        $scope.viewbyH = 10;
        $scope.totalItemsH = $scope.icdHaupts.length;
        $scope.currentPageH = 1;
        $scope.itemsPerPageH = $scope.viewbyH;
        $scope.maxSizeH = 4; //Number of pager buttons to show

        $scope.setPageH = function (pageNoH) {
            $scope.currentPageH = pageNoH;
        };

        $scope.pageChangedH = function () {
            console.log('Page changed to: ' + $scope.currentPageH);
        };

        $scope.setItemsPerPageH = function (num) {
            $scope.itemsPerPageH = num;
            $scope.currentPageH = 1; //reset to first paghe
        }
    })
    serviceAjax.icdGesamt().success(function (data) {
        $scope.icdGesamts = data;
        $scope.viewbyG = 10;
        $scope.totalItemsG = $scope.icdGesamts.length;
        $scope.currentPageG = 1;
        $scope.itemsPerPageG = $scope.viewbyG;
        $scope.maxSizeG = 4; //Number of pager buttons to show

        $scope.setPageG = function (pageNo) {
            $scope.currentPageG = pageNo;
        };

        $scope.pageChangedG = function () {
            console.log('Page changed to: ' + $scope.currentPageG);
        };

        $scope.setItemsPerPageG = function (num) {
            $scope.itemsPerPageG = num;
            $scope.currentPageG = 1; //reset to first paghe
        }
    })
});