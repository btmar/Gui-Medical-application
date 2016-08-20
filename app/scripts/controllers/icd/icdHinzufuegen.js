angular.module('sbAdminApp')
        .controller('ICDHinzufuegenCtrl', function ($state, $scope, serviceAjax) {

            $scope.save = function (item, event) {
                formData = $scope.icd;
                serviceAjax.saveICDNummer(formData).success(function () {
                    $state.go('dashboard.icdNummern');
                });
            };
            $scope.cancel = function () {
                $state.go('dashboard.icdNummern');
            };
        });