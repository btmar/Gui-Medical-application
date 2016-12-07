angular.module("sbAdminApp")
        .controller("MedikamentBearbeitenCtrl", function ($scope, $state, $stateParams, serviceAjax) {
            var pzn = $stateParams.pzn;

            serviceAjax.infoMedikament(pzn).success(function (data) {
                $scope.medikament = data;
                serviceAjax.medikamentUsed($scope.medikament).success(function (data) {
                    if (data.toString() !== "") {
                        if (data.krankheits.length !== 0) {
                        $scope.krankheits = data.krankheits;
                        $scope.currentPageK = 1;
                    }
                        if (data.prozedurs.length !== 0) {
                            $scope.prozedurs = data.prozedurs;
                            $scope.currentPageP = 1;
                        }
                    }
                });
            });

            $scope.bearbeiten = function (item, event) {
                formData = $scope.medikament;
                serviceAjax.updateMedikament(formData).success(function () {

                    $state.go('dashboard.medikament');

                });
            };
            $scope.cancel = function () {
                    $state.go('dashboard.medikament');
            };
        });