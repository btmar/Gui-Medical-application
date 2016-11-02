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
app.controller('UploadMedikamentCtrl', function ($scope, ngDialog, serviceAjax, Upload, $timeout) {
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

        $scope.saveMedikament = item;

        ngDialog.openConfirm({template: 'views/addedPopup.html',
            scope: $scope //Pass the scope object if you need to access in the template
        });
    };
    $scope.save = function () {
        var index = $scope.med.indexOf($scope.saveMedikament);

        serviceAjax.saveMedikament($scope.saveMedikament.medikament).success(function () {
            if (index !== -1) {
                $scope.med.splice(index, 1);
            }

            ngDialog.closeAll();
        });
    };

    $scope.cancel = function () {
        ngDialog.closeAll();
    };
    $scope.detail = function (item) {
        console.log(item);
        if (item.krankheits.length === 0 && item.prozedurs.length === 0) {
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
        console.log(krankheit);
        serviceAjax.bearbeitenKrankheit(krankheit).success(function () {

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
        serviceAjax.bearbeitenProzedur(prozedur).success(function () {

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
    $scope.update = function () {
        serviceAjax.medikamentVersion().success(function (data) {
            $scope.versions = data;
        });

        if (contains($scope.versions, $scope.version) || $scope.version === undefined || $scope.version === null || $scope.version === "" || $scope.file === undefined || $scope.file === null || $scope.version.indexOf(' ') > -1) {
            if (contains($scope.versions, $scope.version)) {
                $scope.fehler = "Diese Versionsname existiert bereits";
                ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                    scope: $scope //Pass the scope object if you need to access in the template
                });
            } else {
                if ($scope.file === undefined || $scope.file === null) {
                    $scope.fehler = "Bitte laden Sie eine Datei hoch";
                    ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                        scope: $scope //Pass the scope object if you need to access in the template
                    });
                } else {
                    if ($scope.file === undefined || $scope.file === null) {
                        $scope.fehler = "Bitte laden Sie eine Datei hoch";
                        ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                            scope: $scope //Pass the scope object if you need to access in the template
                        });
                    } else {
                        if ( $scope.version.indexOf(' ') > -1) {
                            $scope.fehler = "Die vesionsname darf keine Leerzeichen enhalten";
                            ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                                scope: $scope //Pass the scope object if you need to access in the template
                            });
                        }
                    }

                }
            }
        } else {
            $scope.new2 = null;
            $scope.new = null;
            $scope.deleted2 = null;
            $scope.deleted = null;
            $scope.med2 = null;
            $scope.med = null;
            $scope.inhaltsstoff = null;
            $scope.inhaltsstoff2 = null;
            $scope.bezeichnung = null;
            $scope.bezeichnung2 = null;
            $scope.einheit = null;
            $scope.einheit2 = null;
            $scope.roteListe = null;
            $scope.roteListe2 = null;

            serviceAjax.medFile($scope.file, $scope.version).success(function (data) {
                console.log(data);
                if (data === "") {
                    $scope.fehler = "Datei nicht geeignet";
                    ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                        scope: $scope //Pass the scope object if you need to access in the template
                    });
                } else {
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
                    $scope.bezeichnung2 = data.bezeichnung;
                    if ($scope.bezeichnung2.length !== 0) {
                        $scope.bezeichnung = data.bezeichnung;
                        $scope.currentPageB = 10;
                    }
                    else {
                        $scope.bezeichnung = null;
                    }
                    $scope.einheit2 = data.einheit;
                    if ($scope.einheit2.length !== 0) {
                        $scope.einheit = data.einheit;
                        $scope.currentPageE = 10;
                    }
                    else {
                        $scope.einheit = null;
                    }
                    $scope.roteListe2 = data.roteListe;
                    if ($scope.roteListe2.length !== 0) {
                        $scope.roteListe = data.roteListe;
                        $scope.currentPageR = 10;
                    }
                    else {
                        $scope.roteListe = null;
                    }
                    $scope.inhaltsstoff2 = data.inhaltsstoff;
                    if ($scope.inhaltsstoff2.length !== 0) {
                        $scope.inhaltsstoff = data.inhaltsstoff;
                        $scope.currentPageI = 10;
                    }
                    else {
                        $scope.inhaltsstoff = null;
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
                }
            });
        }
    };
    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (file !== undefined) {
                    Upload.upload({
                        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        data: {
                            version: $scope.version,
                            file: file
                        }
                    }).then(function (resp) {
                        $scope.file = file;
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