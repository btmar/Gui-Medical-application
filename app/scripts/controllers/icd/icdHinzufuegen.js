angular.module('sbAdminApp')
        .controller('ICDHinzufuegenCtrl', function ($state, $scope, serviceAjax) {
            var loadIcd = function () {
                serviceAjax.icdRead().success(function (data) {
                    $scope.icdGesamts = data;
                });
            };
            loadIcd();
            $scope.save = function (item, event) {
                formData = $scope.icd;

                if (formData.code !== undefined && formData.code !== null && formData.code !== "" && formData.diagnose !== undefined && formData.diagnose !== null && formData.diagnose !== "") {

                    if (contains($scope.icdGesamts, formData.code)) {
                        $scope.fehler = "Dieser ICD-Nummer-Code existiert bereits";
                        ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                            scope: $scope //Pass the scope object if you need to access in the template
                        });
                    }
                    else {
                        serviceAjax.saveICDNummer(formData).success(function () {
                            $state.go('dashboard.icdNummern');
                        });
                    }
                }

            };
            $scope.cancel = function () {
                $state.go('dashboard.icdNummern');
            };
            function contains(a, obj) {
                if (a !== undefined) {
                    for (var i = 0; i < a.length; i++) {
                        if (a[i] === obj) {
                            return true;
                        }
                    }
                }
                return false;
            }
        });