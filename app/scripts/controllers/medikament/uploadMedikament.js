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
    $scope.cancel = function () {
        ngDialog.closeAll();
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
                            if ($scope.version.indexOf(' ') > -1) {
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
                            $scope.currentPageM = 1;
                        } else {
                            $scope.new = null;
                        }
                        $scope.bezeichnung2 = data.bezeichnung;
                        if ($scope.bezeichnung2.length !== 0) {
                            $scope.bezeichnung = data.bezeichnung;
                            $scope.currentPageB = 10;
                        } else {
                            $scope.bezeichnung = null;
                        }
                        $scope.einheit2 = data.einheit;
                        if ($scope.einheit2.length !== 0) {
                            $scope.einheit = data.einheit;
                            $scope.currentPageE = 10;
                        } else {
                            $scope.einheit = null;
                        }
                        $scope.roteListe2 = data.roteListe;
                        if ($scope.roteListe2.length !== 0) {
                            $scope.roteListe = data.roteListe;
                            $scope.currentPageR = 10;
                        } else {
                            $scope.roteListe = null;
                        }
                        $scope.inhaltsstoff2 = data.inhaltsstoff;
                        if ($scope.inhaltsstoff2.length !== 0) {
                            $scope.inhaltsstoff = data.inhaltsstoff;
                            $scope.currentPageI = 10;
                        } else {
                            $scope.inhaltsstoff = null;
                        }
                        $scope.deleted2 = data.deleted;
                        if ($scope.deleted2.length !== 0) {
                            $scope.deleted = data.deleted;
                            $scope.currentPageD = 1;

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
        });
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