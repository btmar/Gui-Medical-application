angular.module("sbAdminApp")
        .controller("ICDBearbeitenCtrl", function ($scope, $state, ngDialog, $stateParams, serviceAjax) {
            var code = $stateParams.code;

            serviceAjax.infoIcd(code).success(function (data) {
                $scope.icd = data;

            })
            $scope.bearbeiten = function () {
                serviceAjax.updateICDGesamt(formData).success(function (data) {

                    $state.go('dashboard.icdNummern')

                })
                ngDialog.closeAll();
            };
            $scope.save = function (item, event) {
                formData = $scope.icd;
                if (formData.code === code)
                {

                    serviceAjax.updateICDGesamt(formData).success(function (data) {

                        $state.go('dashboard.icdNummern')

                    })
                } else {
                    serviceAjax.icdListUsed(code).success(function (data) {
                        console.log(data);
                        $scope.prozedurs = data.prozedurs;
                        $scope.viewbyP = 1;
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

                        $scope.krankheits = data.krankheits;
                        $scope.viewbyK = 1;
                        $scope.totalItemsK = $scope.krankheits.length;
                        $scope.currentPageK = 1;
                        $scope.itemsPerPageK = $scope.viewbyK;
                        $scope.maxSizeK = 5;
                        $scope.setPageK = function (pageNoK) {
                            $scope.currentPageK = pageNoK;
                        };

                        $scope.pageChangedK = function () {
                            console.log('Page changed to: ' + $scope.currentPageK);
                        };

                        $scope.setItemsPerPageK = function (num) {
                            $scope.itemsPerPageK = num;
                            $scope.currentPageK = 1;
                        }
                        if (data.krankheits.length === 0 && data.prozedurs.length === 0) {
                            serviceAjax.updateICDGesamt(formData).success(function (data) {

                                $state.go('dashboard.icdNummern')

                            })
                        } else {
                            ngDialog.openConfirm({template: 'views/icd/bearbeitenForm.html',
                                scope: $scope
                            }).then(
                                    function (value) {

                                    },
                                    function (value) {
                                    }
                            );
                        }
                    });
                }
            };
        });