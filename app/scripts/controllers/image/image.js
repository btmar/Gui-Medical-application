'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('ImageCtrl', function ($scope, serviceAjax, ngDialog) {


    var loadImage = function () {
        $scope.images = [];
        serviceAjax.QueryImage().success(function (data) {
            $scope.images = data;
            $scope.currentPageK = 1;
        });
    };

    $scope.removeItem = function (image) {
        $scope.img = image;
        ngDialog.openConfirm({template: 'views/popup/entfernenPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };

    $scope.entfernen = function () {
        var index = $scope.images.indexOf($scope.img);
        serviceAjax.deleteImage($scope.img.title).success(function (data) {
            ngDialog.closeAll();
            if (data === true) {
                if (index !== -1) {
                    $scope.images.splice(index, 1);
                }
            } else {

                alert("Dieses Bild ist von anderen Standards benutzt !");
            }

        });
    };

    $scope.cancel = function () {
        ngDialog.closeAll();
    };

    loadImage();
});