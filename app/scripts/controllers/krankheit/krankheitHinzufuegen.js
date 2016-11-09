angular.module('sbAdminApp')
        .controller('KrankheitHinzufuegenCtrl', function ($state, ngDialog, $scope, serviceAjax) {

            function contains(a, obj) {
                if (a !== undefined) {
                    for (var i = 0; i < a.length; i++) {
                        if (a[i].title === obj) {
                            return true;
                        }
                    }
                }
                return false;
            }
            var loadKrankheits = function () {
                $scope.krankheits = [];
                serviceAjax.krank().success(function (data) {
                    $scope.krankheits = data;
                });
            };
            loadKrankheits();
            $scope.save = function (item, event) {
                formData = $scope.krankheit;
                formData.prozedur = $scope.prozedur;
                if (formData.title !== undefined) {

                    if (contains($scope.krankheits, formData.title)) {
                        $scope.fehler = "Dieser Krankheitstitle existiert bereits";
                        ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                            scope: $scope //Pass the scope object if you need to access in the template
                        });
                    } else {
                        serviceAjax.hinzuKrankheit(formData).success(function (data) {
                            $state.go('dashboard.krankheit');

                        });
                    }
                }
            };

            $scope.cancel = function () {
                $state.go('dashboard.krankheit');
            };

            var loadProzedurs = function () {

                serviceAjax.prozed().success(function (data) {
                    $scope.prozedurs = data;
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


                });
            };

            $scope.openProzedurForm = function () {
                loadProzedurs();

                ngDialog.openConfirm({template: 'views/krankheit/prozedurForm.html',
                    scope: $scope
                }).then(
                        function (value) {

                        },
                        function (value) {
                        }
                );
            };

            $scope.checkProzedur = function (prozedur) {

                $scope.prozedur = prozedur;
                ngDialog.closeAll();
            };

            $scope.today = function () {
                $scope.dt = new Date();
            };
            $scope.today();

            $scope.clear = function () {
                $scope.dt = null;
            };

            $scope.inlineOptions = {
                showWeeks: true
            };

            $scope.open2 = function () {
                $scope.popup2.opened = true;
            };

            $scope.popup2 = {
                opened: false
            };
            $scope.options = {
                language: 'de'
            };

            $scope.onReady = function () {
            };
        });