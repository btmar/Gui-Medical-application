angular.module('sbAdminApp')
        .controller('ProzedurHinzufuegenCtrl', function ($state,ngDialog, $scope, serviceAjax) {

            var loadProzedurs = function () {
                serviceAjax.prozed().success(function (data) {
                    $scope.prozedurs = data;
                });
            };
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
            loadProzedurs();
            $scope.save = function (item, event) {
                formData = $scope.prozedur;
                if (formData.title !== undefined) {

                    if (contains($scope.prozedurs, formData.title)) {
                        $scope.fehler = "Dieser Prozedurstitle existiert bereits";
                        ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                            scope: $scope //Pass the scope object if you need to access in the template
                        });
                    } else {
                        serviceAjax.hinzuProzedur(formData).success(function (data) {
                            $state.go('dashboard.prozedur');

                        });
                    }
                }
            };
            $scope.cancel = function () {
                $state.go('dashboard.prozedur');
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