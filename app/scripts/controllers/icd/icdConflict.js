angular.module('sbAdminApp')
        .controller('IcdConflictCtrl', function ($scope, ngDialog, serviceAjax, $location, $anchorScroll) {

            var loadConflict = function () {
                serviceAjax.icdnummerConflict().success(function (data) {
                    $scope.icd = data;
                    $scope.currentPageMK = 1;
                });
            };
            loadConflict();
            var scrollTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };
            $scope.detail = function (item) {
                if (item.krankheits.length === 0 && item.prozedurs.length === 0) {
                } else {
                    $scope.krankheits = item.krankheits;
                    $scope.prozedurs = item.prozedurs;
                    $scope.name = item.icd.diagnose;
                    $scope.code = item.icd.code;
                    $scope.currentPageK = 1;
                    scrollTo("foo");
                }
            };
            $scope.hinzufuegen = function (item) {

                $scope.saveIcd = item;
                ngDialog.openConfirm({template: 'views/popup/addedPopup.html',
                    scope: $scope //Pass the scope object if you need to access in the template
                });
            };
            $scope.save = function () {
                var index = $scope.icd.indexOf($scope.saveIcd);

                serviceAjax.saveICDNummer($scope.saveIcd.icd).success(function () {
                    if (index !== -1) {
                        $scope.icd.splice(index, 1);
                    }
                    serviceAjax.icdnummerDeleteConflict($scope.saveIcd.icd).success(function () {
                    });
                    ngDialog.closeAll();
                });
            };

            $scope.cancel = function () {
                ngDialog.closeAll();
            };
            $scope.krankheitBearbeiten = function (krankheit) {
                var index = $scope.krankheits.indexOf(krankheit);
                var index2 = $scope.icd.indexOf($scope.saveIcd);

                serviceAjax.bearbeitenKrankheit(krankheit).success(function () {

                    $scope.krankheits.splice(index, 1);
                    if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
                        $scope.krankheits = null;
                        $scope.prozedurs = null;
                        if (index2 !== -1) {
                            $scope.icd.splice(index2, 1);
                        }
                    }
                    loadConflict();
                });
            };

            $scope.prozedurBearbeiten = function (prozedur) {
                var index = $scope.prozedurs.indexOf(prozedur);
                var index2 = $scope.icd.indexOf($scope.saveIcd);

                serviceAjax.bearbeitenProzedur(prozedur).success(function () {

                    $scope.prozedurs.splice(index, 1);
                    if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
                        $scope.krankheits = null;
                        $scope.prozedurs = null;
                        if (index2 !== -1) {
                            $scope.icd.splice(index2, 1);
                        }
                    }
                    loadConflict();
                });
            };

        });