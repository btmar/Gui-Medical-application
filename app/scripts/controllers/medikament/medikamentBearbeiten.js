angular.module("sbAdminApp")
        .controller("MedikamentBearbeitenCtrl", function ($scope, $state, $stateParams, serviceAjax) {
            var pzn = $stateParams.pzn;

            serviceAjax.infoMedikament(pzn).success(function (data) {
                $scope.medikament = data;
                serviceAjax.medikamentUsed($scope.medikament).success(function (data) {
                    if (data.toString() !== "") {
                        if (data.krankheits.length !== 0) {
                        $scope.krankheits = data.krankheits;
                        $scope.viewbyK = 10;
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
                    }
                        if (data.prozedurs.length !== 0) {
                            $scope.prozedurs = data.prozedurs;
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
                        }
                    }
                });
            });

            $scope.bearbeiten = function (item, event) {
                formData = $scope.medikament;
                serviceAjax.updateMedikament(formData).success(function () {

                    $state.go('dashboard.medikament');

                });
            };
            $scope.cancel = function () {
                $state.go('dashboard.medikamnet')
            };
        });