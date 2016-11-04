'use strict';

var myApp = angular.module('sbAdminApp');

myApp.controller('userRegisterCtrl', function ($scope, $state, serviceAjax) {

    //alert("Entered userRegister controller");
   
    $scope.addNewUser = function() {

        var formData = $scope.user;
        var passwordRepeated = $scope.passwordRepeated;
        
        // Check if repeaded password is the same as first password
        if(formData.password.localeCompare(passwordRepeated) !== 0) {
            alert("Error: Passwords are not identical.");
            return;
        }
        
        //alert("Trying to add new user: " + formData.userName);
        serviceAjax.addNewUser(formData).success(function (data) {
            alert("New user added successfully.");
            $state.go('dashboard.userData');
        });
    };
});