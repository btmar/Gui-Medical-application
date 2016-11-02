'use strict';

/**
 * @ngdoc directive
 * @name sbAdminApp.directive:tableOfContents
 * @description
 * # tableOfContents
 */
angular.module('sbAdminApp')
  .directive('tableOfContents', function(){
    return {
        restrict:'A',
        require:'?ngModel',
        link : function($scope, $element, attrs, ngModel) {
            function updateHeadlines() {
                $scope.headlines=[];
                console.log($element[0].querySelector('h1'));
                console.log($element[0]);
                var resizeBar = $element[0].querySelectorAll('h1,h2');
                console.log(resizeBar);
                angular.forEach($element[0].querySelectorAll('h1,h2,h3,h4,h5,h6'), function(e){
                    $scope.headlines.push({ 
                        level: e.tagName[1], 
                        label: angular.element(e).text(),
                        element: e
                    });
                });
            }
            // avoid memoryleaks from dom references
            $scope.$on('$destroy',function(){
                $scope.headlines=[];
            });
            // scroll to one of the headlines
            $scope.scrollTo=function(headline){
                headline.element.scrollIntoView();
            };
//            // when the html updates whe update the headlines
            ngModel.$render = updateHeadlines;
            updateHeadlines();
        }
    };
});