var myApp = angular.module('sbAdminApp', []);

function AjoutCtrl($scope) {
}

myApp.directive("addbuttonsbutton", function(){
	return {
		restrict: "E",
		template: "<button addbuttons id='{{ buttonId }}' class='cursor-hand btn btn-link' type='button' ><i class='fa  fa-plus-circle'></i></button> ",
		scope : {
			buttonId : '@' ,
		}
	}
});


myApp.directive("addbuttons", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(e){
			switch (attrs.id ){
				case "hintergrund":
				angular.element(document.getElementById('space-for-hintergrund'))
				.append($compile
					("<div><input id='input-to-add' class='form-control' placeholder='Enter text'/></div>")(scope));
				break;

				case "anamnese":
				angular.element(document.getElementById('space-for-anamnese'))
				.append($compile
					("<div><input id='input-to-add' class='form-control' placeholder='Enter text'/></div>")(scope));
				break;

				case "symptome":
				angular.element(document.getElementById('space-for-symptome'))
				.append($compile
					("<div><input id='input-to-add' class='form-control' placeholder='Enter text'/></div>")(scope));
				break;

				case "differentialdiagnosen":
				angular.element(document.getElementById('space-for-differentialdiagnosen'))
				.append($compile
					("<div><input id='input-to-add' class='form-control' placeholder='Enter text'/></div>")(scope));
				break;

				case "therapie":
				angular.element(document.getElementById('space-for-therapie'))
				.append($compile
					("<div><input id='input-to-add' class='form-control' placeholder='Enter text'/></div>")(scope));
				break;

				case "beratung":
				angular.element(document.getElementById('space-for-beratung'))
				.append($compile
					("<div><input id='input-to-add' class='form-control' placeholder='Enter text'/></div>")(scope));
				break;

				case "notes":
				angular.element(document.getElementById('space-for-notes'))
				.append($compile
					("<div><input id='input-to-add' class='form-control' placeholder='Enter text'/></div>")(scope));
				break;

			};
		});
	};
});

