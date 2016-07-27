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
app.controller('UploadMedikamentCtrl', function ($scope, ngDialog, serviceAjax, Upload, $timeout) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.log = '';
    $scope.detail = function (item) {
        console.log(item);
        if (item.krankheits.length === 0 && item.krankheits.length === 0) {
        } else {
            $scope.krankheits = item.krankheits;
            $scope.prozedurs = item.prozedurs;
            $scope.name = item.medikament.bezeichnung;
            ngDialog.openConfirm({template: 'views/medikament/versionForm.html',
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
        serviceAjax.versionningKrankheit(krankheit).success(function () {

            $scope.krankheits.splice(index, 1);
            if ($scope.krankheits.length === 0) {
                ngDialog.closeAll();
            }

        });
    };

    $scope.krankheitIgnorieren = function (krankheit) {
        var index = $scope.krankheits.indexOf(krankheit);
        $scope.krankheits.splice(index, 1);
        if ($scope.krankheits.length === 0) {
            ngDialog.closeAll();
        }
    };
    $scope.prozedurBearbeiten = function (prozedur) {
        var index = $scope.prozedurs.indexOf(prozedur);
        serviceAjax.versionningProzedur(prozedur).success(function () {

            $scope.prozedurs.splice(index, 1);
            if ($scope.prozedurs.length === 0) {
                ngDialog.closeAll();
            }
        });
    };

    $scope.prozedurIgnorieren = function (prozedur) {
        var index = $scope.prozedurs.indexOf(prozedur);
        $scope.prozedurs.splice(index, 1);
        if ($scope.prozedurs.length === 0) {
            ngDialog.closeAll();
        }
    };
    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.$error) {
                    Upload.upload({
                        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        data: {
                            version: $scope.version,
                            file: file
                        }
                    }).then(function (resp) {
                        serviceAjax.medFile(file, $scope.version).success(function (data) {
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
                                }
                            }
                            else {
                                $scope.new = null;
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
                                }

                                serviceAjax.medikamentListUsed($scope.deleted).success(function (data) {
                                    $scope.med2 = data;
                                    if ($scope.med2.length !== 0) {
                                        $scope.med = data;

                                        $scope.currentPageMK = 1;
                                        $scope.currentPageK = 1;
                                    }
                                });
                            } else {
                                $scope.deleted = null;
                                $scope.med = null;
                            }
                            ;
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
    };
});