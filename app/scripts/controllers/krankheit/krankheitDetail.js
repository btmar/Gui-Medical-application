angular.module('sbAdminApp')

.controller('KrankheitDetailCtrl', function ($scope, $stateParams, serviceAjax) {
	var title = $stateParams.title;
serviceAjax.infoImage("bilel").success(function(data){
            console.log(data);
		$scope.image = data.image;
	});
	serviceAjax.infoKrankheit(title).success(function(data){
		$scope.krankheit = data;
                $scope.html="<img data-ng-src=\"data:image/PNG;base64,{{image}}\">";

	});
//        window.onload = function () {
//            console.log(document.getElementById("contents").innerHTML);
//    var toc = "";
//    var level = 0;
//
//    document.getElementById("contents").innerHTML =
//        document.getElementById("contents").innerHTML.replace(
//            /<h([\d])>([^<]+)<\/h([\d])>/gi,
//            function (str, openLevel, titleText, closeLevel) {
//                if (openLevel != closeLevel) {
//                    return str;
//                }
//
//                if (openLevel > level) {
//                    toc += (new Array(openLevel - level + 1)).join("<ul>");
//                } else if (openLevel < level) {
//                    toc += (new Array(level - openLevel + 1)).join("</ul>");
//                }
//
//                level = parseInt(openLevel);
//
//                var anchor = titleText.replace(/ /g, "_");
//                toc += "<li><a href=\"#" + anchor + "\">" + titleText
//                    + "</a></li>";
//
//                return "<h" + openLevel + "><a name=\"" + anchor + "\">"
//                    + titleText + "</a></h" + closeLevel + ">";
//            }
//        );
//
//    if (level) {
//        toc += (new Array(level + 1)).join("</ul>");
//    }
//
//    document.getElementById("toc").innerHTML += toc;
//                console.log(toc);
//
//};
});
