angular.module('sbAdminApp')
        .controller('MedikamentHinzufuegenCtrl', function ($state, $scope, serviceAjax) {

            $scope.save = function (item, event) {
                formData = $scope.medikament;
                console.log($scope.medikament);
                console.log(formData);
                console.log(formData.pzn);
                console.log(formData.bezeichnung);
                if (formData.pzn !== undefined && formData.pzn !== null && formData.pzn !== "" && formData.bezeichnung !== undefined && formData.bezeichnung !== null && formData.bezeichnung !== "" ) {
                console.log(formData.pzn);

                serviceAjax.saveMedikament(formData).success(function () {
                    $state.go('dashboard.medikament');
                });
            }
            };
            $scope.cancel = function () {
                $state.go('dashboard.medikament');
            };
        });