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
app.controller('UploadICDNummerCtrl', function ($scope, ngDialog, serviceAjax, Upload, $timeout) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file !== null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.log = '';
    $scope.hinzufuegen = function (item) {

        $scope.saveIcd = item;

        ngDialog.openConfirm({template: 'views/addedPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };
    $scope.save = function () {
        var index = $scope.icd.indexOf($scope.saveIcd);

        serviceAjax.saveICDNummer($scope.saveIcd.icdnummer).success(function () {
            if (index !== -1) {
                $scope.icd.splice(index, 1);
            }

            ngDialog.closeAll();
        });
    };

    $scope.cancel = function () {
        ngDialog.closeAll();
    };
    $scope.detail = function (item) {
        if (item.krankheits.length === 0 && item.krankheits.length === 0) {
        } else {
            $scope.krankheits = item.krankheits;
            $scope.prozedurs = item.prozedurs;
            $scope.name = item.icdnummer.bezeichnung;
            ngDialog.openConfirm({template: 'views/icd/versionForm.html',
                className: 'ngdialog-theme-default custom-width-1150',
                scope: $scope
            }).then(
                    function (value) {

                    },
                    function (value) {
                    }
            );
        }
    };
    $scope.krankheitBearbeiten = function (krankheit) {
        var index = $scope.krankheits.indexOf(krankheit);
        serviceAjax.versionningIcdKrankheit(krankheit).success(function () {

            $scope.krankheits.splice(index, 1);
            if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
                ngDialog.closeAll();
            }

        });
    };

    $scope.krankheitIgnorieren = function (krankheit) {
        var index = $scope.krankheits.indexOf(krankheit);
        $scope.krankheits.splice(index, 1);
        if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
            ngDialog.closeAll();
        }
    };
    $scope.prozedurBearbeiten = function (prozedur) {
        var index = $scope.prozedurs.indexOf(prozedur);
        serviceAjax.versionningIcdProzedur(prozedur).success(function () {

            $scope.prozedurs.splice(index, 1);
            if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
                ngDialog.closeAll();
            }
        });
    };

    $scope.prozedurIgnorieren = function (prozedur) {
        var index = $scope.prozedurs.indexOf(prozedur);
        $scope.prozedurs.splice(index, 1);
        if ($scope.prozedurs.length === 0 && $scope.krankheits.length === 0) {
            ngDialog.closeAll();
        }
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
    $scope.upload = function (files) {
        serviceAjax.icdnummerVersion().success(function (data) {
            $scope.versions = data;
        });
        if (contains($scope.versions, $scope.version)) {
            ngDialog.openConfirm({template: 'views/versionPopup.html',
                scope: $scope //Pass the scope object if you need to access in the template
            });
        } else {


            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    if (file!== undefined) {
                        Upload.upload({
                            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                            data: {
                                version: $scope.version,
                                file: file
                            }
                        }).then(function (resp) {

                            $scope.new2 = null;
                            $scope.new = null;
                            $scope.diagnose2 = null;
                            $scope.diagnose = null;
                            $scope.type2 = null;
                            $scope.type = null;
                            $scope.deleted2 = null;
                            $scope.deleted = null;
                            $scope.icd2 = null;
                            $scope.icd = null;
                            serviceAjax.icdFile(file, $scope.version).success(function (data) {
                                $scope.new2 = data.new;
                                if ($scope.new2.length !== 0) {
                                    $scope.new = data.new;
                                    $scope.viewbyM = 10;
                                    $scope.totalItemsM = $scope.new.length;
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
                                }
                                else {
                                    $scope.new = null;
                                }
                                $scope.diagnose2 = data.diagnose;
                                if ($scope.diagnose2.length !== 0) {
                                    $scope.diagnose = data.diagnose;
                                    $scope.currentPageD = 10;
                                }
                                else {
                                    $scope.diagnose = null;
                                }
                                $scope.type2 = data.type;
                                if ($scope.type2.length !== 0) {
                                    $scope.type = data.type;
                                    $scope.currentPageT = 10;

                                }
                                else {
                                    $scope.type = null;
                                }

                                $scope.deleted2 = data.deleted;
                                if ($scope.deleted2.length !== 0) {
                                    $scope.deleted = data.deleted;
                                    $scope.viewbyD = 10;
                                    $scope.totalItemsD = $scope.deleted.length;
                                    $scope.currentPageD = 1;
                                    $scope.itemsPerPageD = $scope.viewbyD;
                                    $scope.maxSizeD = 5;

                                    $scope.setPageM = function (pageNo) {
                                        $scope.currentPageD = pageNo;
                                    };

                                    $scope.pageChangedD = function () {
                                        console.log('Page changed to: ' + $scope.currentPageD);
                                    };

                                    $scope.setItemsPerPageM = function (num) {
                                        $scope.itemsPerPageD = num;
                                        $scope.currentPageD = 1;
                                    };

                                    serviceAjax.icdnummerListUsed($scope.deleted).success(function (data) {
                                        $scope.icd2 = data;
                                        if ($scope.icd2.length !== 0) {
                                            $scope.icd = data;
                                            $scope.currentPageMK = 1;
                                            $scope.currentPageK = 1;
                                        }
                                    });
                                } else {
                                    $scope.deleted = null;
                                    $scope.icd = null;
                                }
                            });
                            $timeout(function () {
                                $scope.log = 'file: ' +
                                        resp.config.data.file.name +
                                        ', Response: ' + JSON.stringify(resp.data) +
                                        '\n' + $scope.log;
                            });
                        }, null, function (evt) {
                            var progressPercentage = parseInt(100.0 *
                                    evt.loaded / evt.total);
                            $scope.log = 'progress: ' + progressPercentage +
                                    '% ' + evt.config.data.file.name + '\n' +
                                    $scope.log;
                        });
                    }
                }
            }
        }
    };
});