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
  'ckeditor'
  ])

 .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

  $ocLazyLoadProvider.config({
    debug:false,
    events:true,
  });

  $urlRouterProvider.otherwise('/dashboard/krankheit');

  $stateProvider
  .state('dashboard', {
    url:'/dashboard',
    templateUrl: 'views/dashboard/main.html',
    resolve: {
      loadMyDirectives:function($ocLazyLoad){
        return $ocLazyLoad.load(
        {
          name:'sbAdminApp',
          files:[
          'scripts/directives/header/header.js',
          'scripts/directives/sidebar/sidebar.js',
          'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
          ]
        }),
        $ocLazyLoad.load(
        {
         name:'toggle-switch',
         files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
         "bower_components/angular-toggle-switch/angular-toggle-switch.css"
         ]
       }),
        $ocLazyLoad.load(
        {
          name:'ngAnimate',
          files:['bower_components/angular-animate/angular-animate.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngCookies',
          files:['bower_components/angular-cookies/angular-cookies.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngResource',
          files:['bower_components/angular-resource/angular-resource.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngSanitize',
          files:['bower_components/angular-sanitize/angular-sanitize.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngTouch',
          files:['bower_components/angular-touch/angular-touch.js']
        })
      }
    }
  })
  .state('dashboard.notfall',{
    url:'/notfall',
    templateUrl:'views/notfall.html'
  })
  .state('dashboard.uebersicht',{
    templateUrl:'views/uebersicht.html',
    url:'/uebersicht'
  })
  .state('dashboard.ausstattung',{
    templateUrl:'views/ausstattung.html',
    controller: 'CkeditorCtrl',
    url:'/ausstattung',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/form.js'
          ]
        })
      }
    }
  })

  .state('dashboard.krankheitDetail',{
    templateUrl:'views/krankheit/krankheitDetail.html',
    url:'/krankheit/detail/:title',
    controller: 'KrankheitDetailCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/krankheit/krankheitDetail.js'
          ]
        })
      }
    }
  })     

  .state('dashboard.krankheitHinzufuegen',{
    templateUrl:'views/krankheit/krankheitHinzufuegen.html',
    url:'/krankheit/hinzufuegen',
    controller: 'KrankheitHinzufuegenCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/krankheit/krankheitHinzufuegen.js'          ]
        })
      }
    }
  })

  .state('dashboard.krankheitBearbeitentext',{
    templateUrl:'views/krankheit/krankheitBearbeiten.html',
    url:'/krankheit/bearbeiten/:title',
    controller: 'KrankheitBearbeitenCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/krankheit/krankheitBearbeiten.js'
          ]
        })
      }
    }
  })
  .state('dashboard.search',{
    templateUrl:'views/search.html',
    url:'/search/:searchWord',
    controller: 'SearchCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/search/search.js'
          ]
        })
      }
    }
  })
  .state('dashboard.krankheit',{
    templateUrl:'views/krankheit.html',
    url:'/krankheit',
    controller:'KrankheitCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/krankheit/krankheit.js'              ]
        })
      }
    }

  })
  .state('dashboard.test',{
    templateUrl:'views/test.html',
    url:'/test'
  })
  .state('dashboard.prozedur',{
    templateUrl:'views/prozedur.html',
    url:'/prozedur',
    controller:'ProzedurCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/prozedur/prozedur.js',
          ]
        })
      }
    }
  })
  .state('dashboard.prozedurDetail',{
    templateUrl:'views/prozedur/prozedurDetail.html',
    url:'/prozedur/detail/:title',
    controller: 'ProzedurDetailCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/prozedur/prozedurDetail.js'
          ]
        })
      }
    }
  })     
  .state('dashboard.prozedurHinzufuegen',{
    templateUrl:'views/prozedur/prozedurHinzufuegen.html',
    url:'/prozedur/Hinzufuegen',
    controller: 'ProzedurHinzufuegenCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/prozedur/prozedurHinzufuegen.js'          ]
        })
      }
    }
  })

  .state('dashboard.prozedurBearbeiten',{
    templateUrl:'views/prozedur/prozedurBearbeiten.html',
    url:'/prozedur/bearbeiten/:title',
    controller: 'ProzedurBearbeitenCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/prozedur/prozedurBearbeiten.js'
          ]
        })
      }
    }
  })
  .state('dashboard.blank',{
    templateUrl:'views/pages/blank.html',

    url:'/blank'
  })
}]


);

angular.module('sbAdminApp').config(function($provide){
 function createTable(colCount, rowCount) {
  console.log(colCount);
  var tds = "";
  for (var idxCol = 0; idxCol < colCount; idxCol++) {
    tds=tds+"<td>&nbsp;</td>";
  }
  var trs ="";
  for (var idxRow = 0; idxRow < rowCount; idxRow++) {
    trs=trs+ "<tr>"+ tds + "</tr>";
  }

  return '<table  border="1" cellpadding="1" cellspacing="1">' + trs + '</table>';
}
$provide.decorator('taOptions', ['taRegisterTool', '$delegate','$uibModal', function(taRegisterTool, taOptions,$uibModal,$scope){
  taRegisterTool('table', {
    iconclass: 'fa fa-table',
    tooltiptext: 'insert table',
    action: function(promise, restoreSelection){
      var that=this;
      var uibModalInstance=$uibModal.open({
        templateUrl: 'views/table.html',
        controller :function ($scope, $uibModalInstance) {
          $scope.invitation ={};
          $scope.ok = function () {
            console.log($scope.newtable);
            $uibModalInstance.close($scope.newtable);
            console.log($scope.newtable);

          };

          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        },

        size: 'sm'

      });
                //define result modal , when user complete result information 
                uibModalInstance.result.then(function(result){
                  if (result) {
                    console.log(result);
                    restoreSelection();
                    var html = createTable(result.col,result.row);
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
      }])
});


angular.module('sbAdminApp').config(function($provide){
 function createExternalLink(link) {
  console.log(link);
  if (link[0] != null){
    return '<a href=/#/dashboard/krankheit/detail/'+link[0]+'>'+link[0]+' </a> ';}
    if (link[1] != null){
      return '<a href=/#/dashboard/prozedur/detail/'+link[1]+'>'+link[1]+' </a> ';}
      if (link[2] != null){
        return '<font color="#008000">'+link[2]+' </front>';}
      }


      $provide.decorator('taOptions', ['taRegisterTool', 'serviceAjax','$delegate','$uibModal', function(taRegisterTool,serviceAjax, taOptions,$uibModal,$scope){
        taRegisterTool('link', {
          iconclass: 'fa fa-external-link',
          tooltiptext: 'insert internal link',
          action: function(promise, restoreSelection){
            var that=this;
            var uibModalInstance=$uibModal.open({
              templateUrl: 'views/krankheit/popup.html',
              controller :function ($scope,$http, $uibModalInstance,serviceAjax) {
                $scope.invitation ={};
                serviceAjax.krank().success(function(data){
                  $scope.krankheits = data;
                });
                serviceAjax.prozed().success(function(data){
                  $scope.prozedurs = data;
                });
                serviceAjax.queryICD().success(function(data){
                  $scope.icds = data;
                });      
                $scope.ok = function () {
                  $uibModalInstance.close($scope.link);
                };

                $scope.checkKrankheitlink = function(krankheit){
                  console.log(krankheit);
                  var reg = [];
                  reg[0] = krankheit.title;
                  reg[1] = null;
                  reg[2] = null;
                  console.log(reg);

                  $scope.link = reg;
                  $uibModalInstance.close($scope.link);
                };
                $scope.checkProzedurlink = function(prozedur){
                  console.log(prozedur);
                  var reg = [];
                  reg[0] = null;
                  reg[1] = prozedur.title;
                  reg[2] = null;
                  console.log(reg);

                  $scope.link = reg;
                  $uibModalInstance.close($scope.link);
                };
                $scope.checkICDlink = function(icd){
                  console.log(icd);
                  var reg = [];
                  reg[0] = null;
                  reg[1] = null;
                  reg[2] = icd.code;
                  console.log(reg);

                  $scope.link = reg;
                  $uibModalInstance.close($scope.link);
                };
                $scope.cancel = function () {
                  $uibModalInstance.dismiss('cancel');
                };
              },

              size: '500px'

            });
                //define result modal , when user complete result information 
                uibModalInstance.result.then(function(result){
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
      }])
    });
