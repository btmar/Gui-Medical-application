var app = angular.module('sbAdminApp');

app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    };
});
app.controller('MedikamentCtrl', function ($scope, ngDialog, serviceAjax) {
    serviceAjax.medikamentRead().success(function (data) {
        $scope.medikaments = data;
        $scope.viewbyM = 10;
        $scope.totalItemsM = $scope.medikaments.length;
        $scope.currentPageM = 1;
        $scope.itemsPerPageM = $scope.viewbyM;
        $scope.maxSizeM = 5;

        $scope.setPageM = function (pageNo) {
            $scope.currentPageM = pageNo;
        };

        $scope.pageChangedM = function () {
            console.log('Page changed to: ' + $scope.currentPageM);
        };

        $scope.setItemsPerPageM = function (num) {
            $scope.itemsPerPageM = num;
            $scope.currentPageM = 1;
        };
    });
    var removeMedikament = function (medikament) {

        $scope.med = medikament;

        ngDialog.openConfirm({template: 'views/entfernenPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };


    $scope.entfernen = function () {
        var index = $scope.medikaments.indexOf($scope.med);
        serviceAjax.medikamentEntfernen($scope.med).success(function () {
            if (index !== -1) {
                $scope.medikaments.splice(index, 1);
            }
            ngDialog.closeAll();
        });
    };

    $scope.cancel = function () {
        ngDialog.closeAll();
    };
    $scope.deleteMedikament = function (medikament) {

        serviceAjax.medikamentUsed(medikament).success(function (data) {
            if (data.toString() !== "") {
                $scope.krankheits = data.krankheits;
                $scope.viewbyK = 10;
                $scope.totalItemsK = $scope.krankheits.length;
                $scope.currentPageK = 1;
                $scope.itemsPerPageK = $scope.viewbyK;
                $scope.maxSizeK = 5;
                $scope.setPageK = function (pageNoK) {
                    $scope.currentPageK = pageNoK;
                };

                $scope.pageChangedK = function () {
                    console.log('Page changed to: ' + $scope.currentPageK);
                };

                $scope.setItemsPerPageK = function (num) {
                    $scope.itemsPerPageK = num;
                    $scope.currentPageK = 1;
                };
                if (data.prozedurs.length !== 0) {
                    $scope.prozedurs = data.prozedurs;
                    $scope.viewbyP = 10;
                    $scope.totalItemsP = $scope.prozedurs.length;
                    $scope.currentPageP = 1;
                    $scope.itemsPerPageP = $scope.viewbyP;
                    $scope.maxSizeP = 5;

                    $scope.setPageP = function (pageNoP) {
                        $scope.currentPageP = pageNoP;
                    };

                    $scope.pageChangedP = function () {
                        console.log('Page changed to: ' + $scope.currentPageP);
                    };

                    $scope.setItemsPerPageP = function (num) {
                        $scope.itemsPerPageP = num;
                        $scope.currentPageP = 1;
                    };
                }
                    $scope.name = data.medikament.bezeichnung;
                    ngDialog.openConfirm({template: 'views/medikament/versionForm.html',
                        className: 'ngdialog-theme-default custom-width-1150',
                        scope: $scope
                    }).then(
                            function (value) {

                            },
                            function (value) {
                            }
                    );
                

                $scope.krankheitBearbeiten = function (krankheit) {
                    var index = $scope.krankheits.indexOf(krankheit);
                    serviceAjax.bearbeitenKrankheit(krankheit).success(function () {

                        $scope.krankheits.splice(index, 1);
                        if ($scope.krankheits.length === 0) {
                            removeMedikament(medikament);
                            ngDialog.closeAll();
                        }

                    });
                };

                $scope.krankheitIgnorieren = function (krankheit) {
                    var index = $scope.krankheits.indexOf(krankheit);
                    $scope.krankheits.splice(index, 1);
                    if ($scope.krankheits.length === 0) {
                        removeMedikament(medikament);
                        ngDialog.closeAll();
                    }
                };
                $scope.prozedurBearbeiten = function (prozedur) {
                    var index = $scope.prozedurs.indexOf(prozedur);
                    serviceAjax.bearbeitenProzedur(prozedur).success(function () {

                        $scope.prozedurs.splice(index, 1);
                        if ($scope.prozedurs.length === 0) {
                            removeMedikament(medikament);
                            ngDialog.closeAll();
                        }
                    });
                };

                $scope.prozedurIgnorieren = function (prozedur) {
                    var index = $scope.prozedurs.indexOf(prozedur);
                    $scope.prozedurs.splice(index, 1);
                    if ($scope.prozedurs.length === 0) {
                        removeMedikament(medikament);
                        ngDialog.closeAll();
                    }
                };

            } else
            {
                removeMedikament(medikament);
            }
        }
        );
    };
});