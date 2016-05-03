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
  .state('dashboard.krankheitSuchen',{
    templateUrl:'views/krankheit/krankheitSuchen.html',
    url:'/krankheit/suchen'
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

  .state('dashboard.krankheitBearbeiten',{
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

 
