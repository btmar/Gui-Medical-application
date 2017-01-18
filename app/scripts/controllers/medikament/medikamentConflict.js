var app = angular.module('sbAdminApp');
app.controller('MedikamentConflictCtrl', function ($scope, ngDialog, serviceAjax, $location, $anchorScroll) {
    var loadConflict = function () {
        serviceAjax.medikamentConflict().success(function (data) {
            $scope.med = data;
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
            $scope.name = item.medikament.bezeichnung;
            $scope.pzn = item.medikament.pzn;
            $scope.currentPageK = 1;
            scrollTo("foo");
        }
    };
    $scope.hinzufuegen = function (item) {

        $scope.saveMedikament = item;
        ngDialog.openConfirm({template: 'views/popup/addedPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };
    $scope.save = function () {
        var index = $scope.med.indexOf($scope.saveMedikament);

        serviceAjax.saveMedikament($scope.saveMedikament.medikament).success(function () {
            if (index !== -1) {
                $scope.med.splice(index, 1);
            }
            serviceAjax.medikamentDeleteConflict($scope.saveMedikament.medikament).success(function () {
            });
            ngDialog.closeAll();
        });
    };

    $scope.cancel = function () {
        ngDialog.closeAll();
    };

    $scope.krankheitBearbeiten = function (krankheit) {
        var index = $scope.krankheits.indexOf(krankheit);
        var index2 = $scope.med.indexOf($scope.saveMedikament);

        serviceAjax.bearbeitenKrankheit(krankheit).success(function () {

            $scope.krankheits.splice(index, 1);
            if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
                $scope.krankheits = null;
                $scope.prozedurs = null;
                if (index2 !== -1) {
                    $scope.med.splice(index2, 1);
                }
            }
            loadConflict();
        });
    };

    $scope.prozedurBearbeiten = function (prozedur) {
         var index = $scope.krankheits.indexOf(prozedur);
        var index2 = $scope.med.indexOf($scope.saveMedikament);

        serviceAjax.bearbeitenProzedur(prozedur).success(function () {

            $scope.prozedurs.splice(index, 1);
            if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
                $scope.krankheits = null;
                $scope.prozedurs = null;
                if (index2 !== -1) {
                    $scope.med.splice(index2, 1);
                }
            }
            loadConflict();
        });
    };


});