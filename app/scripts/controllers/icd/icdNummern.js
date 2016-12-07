
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
app.controller('IcdNummernCtrl', function ($scope, ngDialog, serviceAjax) {


    serviceAjax.icdRead().success(function (data) {
        $scope.icdGesamts = data;
        var listHaupts = [];
        var listGefaehs = [];
        for(var i = 0; i < data.length; i++) {            
        var item = data[i];
        if (item.type === "Hauptdiagnose"){
            listHaupts.push(item);
        }
        if (item.type === "Gefährlich"){
            listGefaehs.push(item);
        }
}
        $scope.icdGefaehs = listGefaehs;
        $scope.icdHaupts = listHaupts;
        $scope.currentPageG = 1;
        $scope.currentPageH = 1;
        $scope.currentPageN = 1;
    });
    var removeICDNummer = function (icdnummer) {

        $scope.icdnummer = icdnummer;

        ngDialog.openConfirm({template: 'views/popup/entfernenPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };


    $scope.entfernen = function () {
        var index = $scope.icdGesamts.indexOf($scope.icdnummer);
        serviceAjax.icdnummerEntfernen($scope.icdnummer).success(function () {
            if (index !== -1) {
                $scope.icdGesamts.splice(index, 1);
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
                $scope.currentPageK = 1;
                if (data.prozedurs.length !== 0) {
                    $scope.prozedurs = data.prozedurs;
                    $scope.currentPageP = 1;
                }
                $scope.name = data.icd.diagnose;
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
                    serviceAjax.bearbeitenKrankheit(krankheit).success(function () {

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
                    serviceAjax.bearbeitenProzedur(prozedur).success(function () {

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
});