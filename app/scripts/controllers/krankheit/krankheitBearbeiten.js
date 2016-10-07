angular.module("sbAdminApp")
        .controller("KrankheitBearbeitenCtrl", function ($scope, $state, ngDialog, $stateParams, serviceAjax) {
            var title = $stateParams.title;

            serviceAjax.infoKrankheit(title).success(function (data) {
                $scope.krankheit = data;
                if ($scope.krankheit.date !== null) {
                    $scope.krankheit.date = new Date($scope.krankheit.date);
                }

            });

            $scope.save = function (item, event) {
                formData = $scope.krankheit;

                serviceAjax.bearbeitenKrankheit(formData).success(function (data) {
                    $state.go('dashboard.krankheit');
                });
            };
            $scope.cancel = function () {
                $state.go('dashboard.krankheit');
            };
            var loadProzedurs = function () {

                serviceAjax.prozed().success(function (data) {
                    $scope.prozedurs = data;

                });


            };
            var loadKrankheits = function () {

                serviceAjax.krank().success(function (data) {
                    $scope.krankheits = data;

                });
            };
            $scope.openProzedurForm = function () {
                loadProzedurs();
                ngDialog.openConfirm({template: 'views/krankheit/prozedurForm.html',
                    scope: $scope //Pass the scope object if you need to access in the template
                }).then(
                        function (value) {

                        },
                        function (value) {
                            //Cancel or do nothing
                        }
                );
            };
            $scope.checkProzedur = function (prozedur) {

                $scope.krankheit.prozedur = prozedur;
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
            // Editor options.
            $scope.options = {
                language: 'de'
            };

            // Called when the editor is completely ready.
            $scope.onReady = function () {
                // ...
            };
        });