angular.module('sbAdminApp')
        .controller('IcdConflictCtrl', function ($scope, ngDialog, serviceAjax) {

            serviceAjax.icdnummerConflict().success(function (data) {
                $scope.icd = data;
                console.log($scope.icd);
                $scope.currentPageMK = 1;
            });

            $scope.detail = function (item) {
                if (item.krankheits.length === 0 && item.prozedurs.length === 0) {
                } else {
                    $scope.krankheits = item.krankheits;
                    $scope.prozedurs = item.prozedurs;
                    $scope.name = item.icd.diagnose;
                    $scope.code = item.icd.code;
                    $scope.currentPageK = 1;
                    ngDialog.openConfirm({template: 'views/icd/versionForm.html',
                        className: 'ngdialog-theme-default custom-width-1150',
                        scope: $scope
                    });
                }
            };
            $scope.hinzufuegen = function (item) {

                $scope.saveIcd = item;
                console.log(item);

                ngDialog.openConfirm({template: 'views/popup/addedPopup.html',
                    scope: $scope //Pass the scope object if you need to access in the template
                });
            };
        });