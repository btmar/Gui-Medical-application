'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('userAdminCtrl', function ($scope, serviceAjax, ngDialog) {

    //alert("Entered userAdmin controller");
   

    $scope.addNewUser = function (item, event) {

        var formData = $scope.user;
        alert("Trying to add new user: " + formData.firstName);
        serviceAjax.addNewUser(formData).success(function (data) {
            alert("New user added successfully.");
            //$state.go('dashboard.krankheit');
        });
    };
});