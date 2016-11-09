'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
        .module('sbAdminApp', [
            'oc.lazyLoad',
            'ui.router',
            'ui.bootstrap',
            'angular-loading-bar',
            'ngSanitize',
            'ngWYSIWYG',
            'textAngular',
            'ngDialog',
            'ckeditor',
            'ngTouch',
//            'angular-toc',
            'ngFileUpload',
            'angularUtils.directives.dirPagination'
        ])

        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

                $ocLazyLoadProvider.config({
                    debug: false,
                    events: true
                });

                $urlRouterProvider.otherwise('/dashboard/krankheit');

                $stateProvider
                        .state('dashboard', {
                            url: '/dashboard',
                            templateUrl: 'views/dashboard/main.html',
                            resolve: {
                                loadMyDirectives: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(
                                            {
                                                name: 'sbAdminApp',
                                                files: [
                                                    'scripts/directives/header/header.js',
                                                    'scripts/directives/sidebar/sidebar.js',
                                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                                ]
                                            }),
                                            $ocLazyLoad.load(
                                                    {
                                                        name: 'toggle-switch',
                                                        files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                                            "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                                        ]
                                                    });
                                            $ocLazyLoad.load(
                                                    {
                                                        name: 'ngAnimate',
                                                        files: ['bower_components/angular-animate/angular-animate.js']
                                                    });
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngCookies',
                                                files: ['bower_components/angular-cookies/angular-cookies.js']
                                            });
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngResource',
                                                files: ['bower_components/angular-resource/angular-resource.js']
                                            });
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngSanitize',
                                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                                            });
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngTouch',
                                                files: ['bower_components/angular-touch/angular-touch.js']
                                            });
                                }
                            }
                        })
                        .state('dashboard.icdNummern', {
                            url: '/icdNummern',
                            templateUrl: 'views/icd/icdNummern.html',
                            controller: 'IcdNummernCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/icd/icdNummern.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.icdDetail', {
                            templateUrl: 'views/icd/icdDetail.html',
                            url: '/icd/detail/:code',
                            controller: 'IcdDetailCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/icd/IcdDetail.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.icdHinzufuegen', {
                            templateUrl: 'views/icd/icdHinzufuegen.html',
                            url: '/icd/hinzufuegen',
                            controller: 'ICDHinzufuegenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/icd/icdHinzufuegen.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.icdBearbeiten', {
                            templateUrl: 'views/icd/icdBearbeiten.html',
                            url: '/icd/bearbeiten/:code',
                            controller: 'ICDBearbeitenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/icd/icdBearbeiten.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.icdVersion', {
                            templateUrl: 'views/icd/versionICD.html',
                            url: '/icd/version',
                            controller: 'ICDNummerVersionCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/icd/icdVersion.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.uploadIcd', {
                            url: '/icd/upload',
                            templateUrl: 'views/icd/uploadICDNummer.html',
                            controller: 'UploadICDNummerCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/icd/uploadIcdNummer.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.image', {
                            url: '/image',
                            templateUrl: 'views/image.html',
                            controller: 'ImageCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/image/image.js'
                                        ]
                                    });
                                }
                            }
                        })
                         .state('dashboard.imageDetail', {
                            templateUrl: 'views/image/imageDetail.html',
                            url: '/image/detail/:title',
                            controller: 'ImageDetailCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/image/imageDetail.js'
                                        ]
                                    });
                                }
                            }
                        })

                        .state('dashboard.imageHinzufuegen', {
                            templateUrl: 'views/image/imageHinzufuegen.html',
                            url: '/image/hinzufuegen',
                            controller: 'ImageHinzufuegenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/image/imageHinzufuegen.js']
                                    });
                                }
                            }
                        })

                        .state('dashboard.imageBearbeitentext', {
                            templateUrl: 'views/image/imageBearbeiten.html',
                            url: '/image/bearbeiten/:title',
                            controller: 'ImageBearbeitenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/image/imageBearbeiten.js'
                                        ]
                                    });
                                }
                            }
                        })
                       
                        .state('dashboard.krankheitNotfall', {
                            templateUrl: 'views/krankheit/krankheitNotfall.html',
                            url: '/krankheit/notfall/:title',
                            controller: 'KrankheitDetailCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/krankheit/krankheitDetail.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikament', {
                            url: '/medikament',
                            templateUrl: 'views/medikament/medikament.html',
                            controller: 'MedikamentCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament/medikament.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikamentDetail', {
                            templateUrl: 'views/medikament/medikamentDetail.html',
                            url: '/medikament/detail/:pzn',
                            controller: 'MedikamentDetailCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament/medikamentDetail.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikamentBearbeiten', {
                            templateUrl: 'views/medikament/medikamentBearbeiten.html',
                            url: '/medikament/bearbeiten/:pzn',
                            controller: 'MedikamentBearbeitenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament/medikamentBearbeiten.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikamentVersion', {
                            templateUrl: 'views/medikament/versionMedikament.html',
                            url: '/medikament/version',
                            controller: 'MedikamentVersionCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament/medikamentVersion.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikamentHinzufuegen', {
                            templateUrl: 'views/medikament/medikamentHinzufuegen.html',
                            url: '/medikament/hinzufuegen',
                            controller: 'MedikamentHinzufuegenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament/medikamentHinzufuegen.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.uploadMedikament', {
                            url: '/medikament/upload',
                            templateUrl: 'views/medikament/uploadMedikament.html',
                            controller: 'UploadMedikamentCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament/uploadMedikament.js'
                                        ]
                                    });
                                }
                            }
                        })

                        .state('dashboard.krankheitDetail', {
                            templateUrl: 'views/krankheit/krankheitDetail.html',
                            url: '/krankheit/detail/:title',
                            controller: 'KrankheitDetailCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/krankheit/krankheitDetail.js'
                                        ]
                                    });
                                }
                            }
                        })

                        .state('dashboard.krankheitHinzufuegen', {
                            templateUrl: 'views/krankheit/krankheitHinzufuegen.html',
                            url: '/krankheit/hinzufuegen',
                            controller: 'KrankheitHinzufuegenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/krankheit/krankheitHinzufuegen.js']
                                    });
                                }
                            }
                        })

                        .state('dashboard.krankheitBearbeitentext', {
                            templateUrl: 'views/krankheit/krankheitBearbeiten.html',
                            url: '/krankheit/bearbeiten/:title',
                            controller: 'KrankheitBearbeitenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/krankheit/krankheitBearbeiten.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.search', {
                            templateUrl: 'views/search.html',
                            url: '/search/:searchWord',
                            controller: 'SearchCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/search/search.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.krankheit', {
                            templateUrl: 'views/krankheit.html',
                            url: '/krankheit',
                            controller: 'KrankheitCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/krankheit/krankheit.js']
                                    });
                                }
                            }

                        })
                        .state('dashboard.test', {
                            templateUrl: 'views/test.html',
                            url: '/test'
                        })
                        .state('dashboard.prozedur', {
                            templateUrl: 'views/prozedur.html',
                            url: '/prozedur',
                            controller: 'ProzedurCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/prozedur/prozedur.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.prozedurDetail', {
                            templateUrl: 'views/prozedur/prozedurDetail.html',
                            url: '/prozedur/detail/:title',
                            controller: 'ProzedurDetailCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/prozedur/prozedurDetail.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.prozedurHinzufuegen', {
                            templateUrl: 'views/prozedur/prozedurHinzufuegen.html',
                            url: '/prozedur/Hinzufuegen',
                            controller: 'ProzedurHinzufuegenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/prozedur/prozedurHinzufuegen.js']
                                    });
                                }
                            }
                        })

                        .state('dashboard.prozedurBearbeiten', {
                            templateUrl: 'views/prozedur/prozedurBearbeiten.html',
                            url: '/prozedur/bearbeiten/:title',
                            controller: 'ProzedurBearbeitenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/prozedur/prozedurBearbeiten.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikament2', {
                            templateUrl: 'views/medikament2.html',
                            url: '/medikament2',
                            controller: 'medikament2Ctrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament2/medikament2.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikament2Detail', {
                            templateUrl: 'views/medikament2/medikament2Detail.html',
                            url: '/medikament2/detail/:title',
                            controller: 'medikament2DetailCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament2/medikament2Detail.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.medikament2Hinzufuegen', {
                            templateUrl: 'views/medikament2/medikament2Hinzufuegen.html',
                            url: '/medikament2/Hinzufuegen',
                            controller: 'medikament2HinzufuegenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament2/medikament2Hinzufuegen.js']
                                    });
                                }
                            }
                        })

                        .state('dashboard.medikament2Bearbeiten', {
                            templateUrl: 'views/medikament2/medikament2Bearbeiten.html',
                            url: '/medikament2/bearbeiten/:title',
                            controller: 'medikament2BearbeitenCtrl',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'sbAdminApp',
                                        files: [
                                            'scripts/controllers/medikament2/medikament2Bearbeiten.js'
                                        ]
                                    });
                                }
                            }
                        })
                        .state('dashboard.blank', {
                            templateUrl: 'views/pages/blank.html',
                            url: '/blank'
                        });
            }]


                );

angular.module('sbAdminApp').config(function ($provide) {
    function createTable(colCount, rowCount) {
        console.log(colCount);
        var tds = "";
        for (var idxCol = 0; idxCol < colCount; idxCol++) {
            tds = tds + "<td>&nbsp;</td>";
        }
        var trs = "";
        for (var idxRow = 0; idxRow < rowCount; idxRow++) {
            trs = trs + "<tr>" + tds + "</tr>";
        }

        return '<table  border="1" cellpadding="1" cellspacing="1">' + trs + '</table>';
    }
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', '$uibModal', function (taRegisterTool, taOptions, $uibModal, $scope) {
            taRegisterTool('table', {
                iconclass: 'fa fa-table',
                tooltiptext: 'insert table',
                action: function (promise, restoreSelection) {
                    var that = this;
                    var uibModalInstance = $uibModal.open({
                        templateUrl: 'views/table.html',
                        controller: function ($scope, $uibModalInstance) {
                            $scope.invitation = {};
                            $scope.ok = function () {
                                $uibModalInstance.close($scope.newtable);

                            };

                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        },
                        size: 'sm'

                    });
                    //define result modal , when user complete result information 
                    uibModalInstance.result.then(function (result) {
                        if (result) {
                            console.log(result);
                            restoreSelection();
                            var html = createTable(result.col, result.row);
                            promise.resolve();
                            return that.$editor().wrapSelection('insertHtml', html);
                        }
                    });
                    return false;
                }
            });
            // add the button to the default toolbar definition
            taOptions.toolbar[1].push('table');
            return taOptions;
        }]);
});


angular.module('sbAdminApp').config(function ($provide) {
    function createExternalLink(link) {
        console.log(link);
        if (link[0] !== null) {

            return '<a href=/#/dashboard/krankheit/detail/' + link[0].split(" ").join("%20") + '>' + link[0] + ' </a> ';
        }
        if (link[1] !== null) {
            return '<a href=/#/dashboard/prozedur/detail/' + link[1].split(" ").join("%20") + '>' + link[1] + ' </a> ';
        }
        if (link[2] !== null) {
            return '<a href=/#/dashboard/icd/detail/' + link[2].split(" ").join("%20") + '>' + link[2] + ' </a>';
        }
        if (link[3] !== null) {
            return link[3].bezeichnung + ' (<a href=/#/dashboard/medikament/detail/' + link[3].pzn.split(" ").join("%20") + '>' + link[3].pzn + '</a>)';
        }
    }


    $provide.decorator('taOptions', ['taRegisterTool', 'serviceAjax', '$delegate', '$uibModal', function (taRegisterTool, serviceAjax, taOptions, $uibModal, $scope) {
            taRegisterTool('link', {
                iconclass: 'fa fa-external-link',
                tooltiptext: 'insert internal link',
                action: function (promise, restoreSelection) {
                    var that = this;
                    var uibModalInstance = $uibModal.open({
                        templateUrl: 'views/krankheit/popup.html',
                        controller: function ($scope, $http, $uibModalInstance, serviceAjax) {
                            $scope.invitation = {};
                            serviceAjax.krank().success(function (data) {
                                $scope.krankheits = data;
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
                                };
                            });
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
                            serviceAjax.icdRead().success(function (data) {
                                $scope.icds = data;
                                $scope.viewbyG = 10;
                                $scope.totalItemsG = $scope.icds.length;
                                $scope.currentPageG = 1;
                                $scope.itemsPerPageG = $scope.viewbyG;
                                $scope.maxSizeG = 5;

                                $scope.setPageG = function (pageNo) {
                                    $scope.currentPageG = pageNo;
                                };

                                $scope.pageChangedG = function () {
                                    console.log('Page changed to: ' + $scope.currentPageG);
                                };

                                $scope.setItemsPerPageG = function (num) {
                                    $scope.itemsPerPageG = num;
                                    $scope.currentPageG = 1;
                                };
                            });
                            serviceAjax.medikamentRead().success(function (data) {
                                $scope.medikaments = data;
                                $scope.viewbyM = 10;
                                $scope.totalItemsM = $scope.medikaments.length;
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
                            });
                            $scope.ok = function () {
                                $uibModalInstance.close($scope.link);
                            };

                            $scope.checkKrankheitlink = function (krankheit) {
                                console.log(krankheit);
                                var reg = [];
                                reg[0] = krankheit.title;
                                reg[1] = null;
                                reg[2] = null;
                                console.log(reg);

                                $scope.link = reg;
                                $uibModalInstance.close($scope.link);
                            };
                            $scope.checkProzedurlink = function (prozedur) {
                                console.log(prozedur);
                                var reg = [];
                                reg[0] = null;
                                reg[1] = prozedur.title;
                                reg[2] = null;
                                console.log(reg);

                                $scope.link = reg;
                                $uibModalInstance.close($scope.link);
                            };
                            $scope.checkICDlink = function (icd) {
                                console.log(icd);
                                var reg = [];
                                reg[0] = null;
                                reg[1] = null;
                                reg[2] = icd.code;
                                console.log(reg);

                                $scope.link = reg;
                                $uibModalInstance.close($scope.link);
                            };
                            $scope.checkMedikamentlink = function (medikament) {
                                console.log(medikament);
                                var reg = [];
                                reg[0] = null;
                                reg[1] = null;
                                reg[2] = null;
                                reg[3] = medikament;
                                console.log(reg);

                                $scope.link = reg;
                                $uibModalInstance.close($scope.link);
                            };
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        },
                        size: 'lg'

                    });
                    //define result modal , when user complete result information 
                    uibModalInstance.result.then(function (result) {
                        if (result) {
                            console.log(result);
                            restoreSelection();
                            var html = createExternalLink(result);
                            promise.resolve();
                            return that.$editor().wrapSelection('insertHtml', html);
                        }
                    });
                    return false;
                }
            });
            // add the button to the default toolbar definition
            taOptions.toolbar[1].push('link');
            return taOptions;
        }]);
});
angular.module('sbAdminApp').config(function ($provide) {
    function addImage(image) {


        return 'image:'+image.title+'(siehe Bild unten)';
    }
    $provide.decorator('taOptions', ['taRegisterTool', 'serviceAjax', '$delegate', '$uibModal', function (taRegisterTool, serviceAjax, taOptions, $uibModal, $scope) {
            taRegisterTool('image', {
                iconclass: 'fa fa-image',
                tooltiptext: 'Insert image',
                action: function (promise, restoreSelection) {
                    var that = this;
                    var uibModalInstance = $uibModal.open({
                        templateUrl: 'views/image/popup.html',
                        controller: function ($scope, $http, $uibModalInstance, serviceAjax) {
                            $scope.invitation = {};
                            serviceAjax.QueryImage().success(function (data) {
                                $scope.images = data;
                                $scope.viewbyK = 10;
                                $scope.totalItemsK = $scope.images.length;
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
                                };
                            });
                           
                            $scope.ok = function () {
                                $uibModalInstance.close($scope.image);
                            };

                            $scope.checkImageLink = function (image) {
                                console.log(image);
                                $scope.image = image;
                                $uibModalInstance.close($scope.image);
                            };
                           
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        },
                        size: 'lg'

                    });
                    //define result modal , when user complete result information 
                    uibModalInstance.result.then(function (result) {
                        if (result) {
                            console.log(result);
                            restoreSelection();
                            var html = addImage(result);
                            promise.resolve();
                            return that.$editor().wrapSelection('insertHtml', html);
                        }
                    });
                    return false;
                }
            });
            // add the button to the default toolbar definition
            taOptions.toolbar[1].push('image');
            return taOptions;
        }]);
});

