angular.module('sbAdminApp')
        .controller('ICDHinzufuegenCtrl', function ($state, $scope, serviceAjax) {

            $scope.save = function (item, event) {
                formData = $scope.icd;
                console.log(formData);
                
                serviceAjax.hinzuICDGesamt(formData).success(function (data) {
                    $state.go('dashboard.icdNummern')
                })
            };
        });