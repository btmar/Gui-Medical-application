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
app.controller('ImageCtrl', function ($scope, ngDialog, serviceAjax, Upload, $timeout) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file !== null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.log = '';
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

        serviceAjax.imageFile($scope.file, $scope.version).success(function (data) {
            if (data === "") {
                $scope.fehler = "Datei nicht geeignet";
                ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                    scope: $scope //Pass the scope object if you need to access in the template
                });
            }
        });
    };
});
