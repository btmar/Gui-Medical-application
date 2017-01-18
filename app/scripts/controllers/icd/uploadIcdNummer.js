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
    $scope.update = function () {
        serviceAjax.icdnummerVersion().success(function (data) {
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
                $scope.diagnose2 = null;
                $scope.diagnose = null;
                $scope.type2 = null;
                $scope.type = null;
                $scope.deleted2 = null;
                $scope.deleted = null;
                $scope.icd2 = null;
                $scope.icd = null;
                serviceAjax.icdFile($scope.file, $scope.version).success(function (data) {
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
                        $scope.diagnose2 = data.diagnose;
                        if ($scope.diagnose2.length !== 0) {
                            $scope.diagnose = data.diagnose;
                            $scope.currentPageD = 10;
                        } else {
                            $scope.diagnose = null;
                        }
                        $scope.type2 = data.type;
                        if ($scope.type2.length !== 0) {
                            $scope.type = data.type;
                            $scope.currentPageT = 10;

                        } else {
                            $scope.type = null;
                        }

                        $scope.deleted2 = data.deleted;
                        if ($scope.deleted2.length !== 0) {
                            $scope.deleted = data.deleted;
                            $scope.currentPageD = 1;


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
                    }
                });
            }
        });
    };

});