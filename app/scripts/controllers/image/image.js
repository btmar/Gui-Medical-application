'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('ImageCtrl', function ($scope, serviceAjax, ngDialog) {


    var loadImage = function () {
        $scope.images = [];
        serviceAjax.QueryImage().success(function (data) {
            $scope.images = data;
            $scope.viewbyK = 10;
            $scope.totalItemsK = $scope.images.length;
            $scope.currentPageK = 1;
            $scope.itemsPerPageK = $scope.viewbyK;
            $scope.maxSizeK = 5;
            $scope.setPageK = function (pageNoK) {
                $scope.currentPageK = pageNoK;
            };
            $scope.pageChangedK = function () {
                console.log('Page changed to: ' + $scope.currentPageK);
            };
            $scope.setItemsPerPageK = function (num) {
                $scope.itemsPerPageK = num;
                $scope.currentPageK = 1;
            };
        });
    };

    $scope.removeItem = function (image) {
        $scope.img = image;

        ngDialog.openConfirm({template: 'views/entfernenPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };

    $scope.entfernen = function () {
        var index = $scope.image.indexOf($scope.img);
        serviceAjax.imageEntfernen($scope.img.title).success(function () {
            if (index !== -1) {
                $scope.image.splice(index, 1);
            }
            ngDialog.closeAll();
        });
    };

    $scope.cancel = function () {
        ngDialog.closeAll();
    };

    loadImage();
});