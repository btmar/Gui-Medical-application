angular.module('sbAdminApp')

        .controller('KrankheitDetailCtrl', function ($scope, $stateParams, serviceAjax) {
            var title = $stateParams.title;

            serviceAjax.infoKrankheit(title).success(function (data) {
                $scope.krankheit = data;
                var newElement = '<h1>This is some dynamically added HTML. Yay!</h1>';
                var bodyElement = "";
                bodyElement.innerHTML = newElement + bodyElement.innerHTML;
                //  $scope.html = htmlEscape(newElement);
                $scope.html = htmlEncode(newElement);
                var parser = new DOMParser();
//            $scope.html = parser.parseFromString(htm, "text/html");
            });
function htmlEscape(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
function htmlEncode( html ) {
    return document.createElement( 'a' ).appendChild( 
        document.createTextNode( html ) ).parentNode.innerHTML;
};
        });
            