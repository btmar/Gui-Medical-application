
var app = angular.module('sbAdminApp');

app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});
app.controller('IcdNummernCtrl', function ($scope, ngDialog, serviceAjax) {

    serviceAjax.icdGefaeh().success(function (data) {
        $scope.icdGefaehs = data;
        $scope.viewbyN = 10;
        $scope.totalItemsN = $scope.icdGefaehs.length;
        $scope.currentPageN = 1;
        $scope.itemsPerPageN = $scope.viewbyN;
        $scope.maxSizeN = 4; //Number of pager buttons to show

        $scope.setPageN = function (pageNoN) {
            $scope.currentPageN = pageNoN;
        };

        $scope.pageChangedN = function () {
            console.log('Page changed to: ' + $scope.currentPageN);
        };

        $scope.setItemsPerPageN = function (num) {
            $scope.itemsPerPageN = num;
            $scope.currentPageN = 1; //reset to first paghe
        };
    });
    serviceAjax.icdHaupt().success(function (data) {
        $scope.icdHaupts = data;
        $scope.viewbyH = 10;
        $scope.totalItemsH = $scope.icdHaupts.length;
        $scope.currentPageH = 1;
        $scope.itemsPerPageH = $scope.viewbyH;
        $scope.maxSizeH = 4; //Number of pager buttons to show

        $scope.setPageH = function (pageNoH) {
            $scope.currentPageH = pageNoH;
        };

        $scope.pageChangedH = function () {
            console.log('Page changed to: ' + $scope.currentPageH);
        };

        $scope.setItemsPerPageH = function (num) {
            $scope.itemsPerPageH = num;
            $scope.currentPageH = 1; //reset to first paghe
        };
    });
    serviceAjax.icdRead().success(function (data) {
        $scope.icdGesamts = data;
        $scope.viewbyG = 10;
        $scope.totalItemsG = $scope.icdGesamts.length;
        $scope.currentPageG = 1;
        $scope.itemsPerPageG = $scope.viewbyG;
        $scope.maxSizeG = 4; //Number of pager buttons to show

        $scope.setPageG = function (pageNo) {
            $scope.currentPageG = pageNo;
        };

        $scope.pageChangedG = function () {
            console.log('Page changed to: ' + $scope.currentPageG);
        };

        $scope.setItemsPerPageG = function (num) {
            $scope.itemsPerPageG = num;
            $scope.currentPageG = 1; //reset to first paghe
        };
    });
    var removeICDNummer = function (icdnummer) {

        $scope.icdnummer = icdnummer;

        ngDialog.openConfirm({template: 'views/entfernenPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };


    $scope.entfernen = function () {
        var index = $scope.icdGefaehs.indexOf($scope.icdnummer);
        serviceAjax.icdnummerEntfernen($scope.icdnummer).success(function () {
            if (index !== -1) {
                $scope.icdGefaehs.splice(index, 1);
            }
            ngDialog.closeAll();
        });
    };

    $scope.cancel = function () {
        ngDialog.closeAll();
    };
    $scope.deleteICDNummer = function (icdnummer) {

        serviceAjax.icdnummerUsed(icdnummer).success(function (data) {
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
                }
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
                $scope.name = data.icdnummer.bezeichnung;
                ngDialog.openConfirm({template: 'views/icd/versionForm.html',
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
                    serviceAjax.versionningIcdKrankheit(krankheit).success(function () {

                        $scope.krankheits.splice(index, 1);
                        if ($scope.krankheits.length === 0) {
                            removeICDNummer(icdnummer)
                            ngDialog.closeAll();
                        }

                    });
                };

                $scope.krankheitIgnorieren = function (krankheit) {
                    var index = $scope.krankheits.indexOf(krankheit);
                    $scope.krankheits.splice(index, 1);
                    if ($scope.krankheits.length === 0) {
                        removeICDNummer(icdnummer);
                        ngDialog.closeAll();
                    }
                };
                $scope.prozedurBearbeiten = function (prozedur) {
                    var index = $scope.prozedurs.indexOf(prozedur);
                    serviceAjax.versionningIcdProzedur(prozedur).success(function () {

                        $scope.prozedurs.splice(index, 1);
                        if ($scope.prozedurs.length === 0) {
                            removeICDNummer(icdnummer);
                            ngDialog.closeAll();
                        }
                    });
                };

                $scope.prozedurIgnorieren = function (prozedur) {
                    var index = $scope.prozedurs.indexOf(prozedur);
                    $scope.prozedurs.splice(index, 1);
                    if ($scope.prozedurs.length === 0) {
                        removeICDNummer(icdnummer);
                        ngDialog.closeAll();
                    }
                };

            } else
            {
                removeICDNummer(icdnummer);
            }
        }
        );
    };
})