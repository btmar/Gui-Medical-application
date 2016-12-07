angular.module("sbAdminApp")
        .controller("ICDBearbeitenCtrl", function ($scope, $state, $stateParams, serviceAjax) {
            var code = $stateParams.code;

            serviceAjax.infoICDNummer(code).success(function (data) {
                $scope.icd = data;
                serviceAjax.icdnummerUsed($scope.icd).success(function (data) {
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
                formData = $scope.icd;
                serviceAjax.updateICDNummer(formData).success(function () {

                    $state.go('dashboard.icdNummern');

                });
            };
            $scope.cancel = function () {
                $state.go('dashboard.icdNummern');
            };
        });