angular.module('sbAdminApp')
        .controller('MedikamentHinzufuegenCtrl', function ($state, $scope, serviceAjax) {

            $scope.save = function (item, event) {
                formData = $scope.medikament;
                console.log(formData);
                
                serviceAjax.saveMedikament(formData).success(function () {
                    $state.go('dashboard.medikament')
                })
            };
            $scope.cancel = function () {
                $state.go('dashboard.medikamnet')
            };
        });