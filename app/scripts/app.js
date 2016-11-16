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
                            templateUrl: 'views/image/image.html',
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
                            templateUrl: 'views/search/search.html',
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
                            templateUrl: 'views/krankheit/krankheit.html',
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
                        .state('dashboard.prozedur', {
                            templateUrl: 'views/prozedur/prozedur.html',
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
                        templateUrl: 'views/tablePopup.html',
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
                        templateUrl: 'views/popup/linkPopup.html',
                        controller: function ($scope, $http, $uibModalInstance, serviceAjax) {
                            $scope.invitation = {};
                            serviceAjax.krank().success(function (data) {
                                $scope.krankheits = data;
                                $scope.currentPageK = 1;
                            });
                            serviceAjax.prozed().success(function (data) {
                                $scope.prozedurs = data;
                                $scope.currentPageP = 1;

                            });
                            serviceAjax.icdRead().success(function (data) {
                                $scope.icds = data;
                                $scope.currentPageG = 1;
                            });
                            serviceAjax.medikamentRead().success(function (data) {
                                $scope.medikaments = data;
                                $scope.currentPageM = 1;
                            });
                            $scope.ok = function () {
                                $uibModalInstance.close($scope.link);
                            };

                            $scope.checkKrankheitlink = function (krankheit) {
                                var reg = [];
                                reg[0] = krankheit.title;
                                reg[1] = null;
                                reg[2] = null;

                                $scope.link = reg;
                                $uibModalInstance.close($scope.link);
                            };
                            $scope.checkProzedurlink = function (prozedur) {
                                var reg = [];
                                reg[0] = null;
                                reg[1] = prozedur.title;
                                reg[2] = null;

                                $scope.link = reg;
                                $uibModalInstance.close($scope.link);
                            };
                            $scope.checkICDlink = function (icd) {
                                var reg = [];
                                reg[0] = null;
                                reg[1] = null;
                                reg[2] = icd.code;

                                $scope.link = reg;
                                $uibModalInstance.close($scope.link);
                            };
                            $scope.checkMedikamentlink = function (medikament) {
                                var reg = [];
                                reg[0] = null;
                                reg[1] = null;
                                reg[2] = null;
                                reg[3] = medikament;

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


        return 'Bild:' + image.title + '(siehe Bild unten)';
    }
    $provide.decorator('taOptions', ['taRegisterTool', 'serviceAjax', '$delegate', '$uibModal', function (taRegisterTool, serviceAjax, taOptions, $uibModal, $scope) {
            taRegisterTool('image', {
                iconclass: 'fa fa-image',
                tooltiptext: 'Insert image',
                action: function (promise, restoreSelection) {
                    var that = this;
                    var uibModalInstance = $uibModal.open({
                        templateUrl: 'views/popup/imagePopup.html',
                        controller: function ($state, $scope, ngDialog, serviceAjax, Upload, $timeout, $http, $uibModalInstance) {
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
                                                    title: $scope.title,
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

                                serviceAjax.imageFile($scope.file, $scope.title).success(function (data) {
                                    if (data === "") {
                                        $scope.fehler = "Datei nicht geeignet";
                                        ngDialog.openConfirm({template: 'views/popup/fehlerPopup.html',
                                            scope: $scope //Pass the scope object if you need to access in the template
                                        });
                                    } else {
                                        $scope.image = data;
                                        $uibModalInstance.close($scope.image);
                                    }
                                });
                            };
                            $scope.invitation = {};
                            serviceAjax.QueryImage().success(function (data) {
                                $scope.images = data;
                                $scope.currentPageK = 1;
                                
                            });

                            $scope.ok = function () {
                                $uibModalInstance.close($scope.image);
                            };

                            $scope.checkImageLink = function (image) {
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

