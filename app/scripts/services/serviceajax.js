'use strict';

/**
 * @ngdoc service
 * @name sbAdminApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the sbAdminApp.
 */
 angular.module('sbAdminApp')
 .factory('serviceAjax', function serviceAjax($http) {

 	return{
 		krank: function(){
 			return $http.get("http://localhost:8080/krankheit/query");
 		},

 		infoKrankheit: function(title){
 			return $http.get("http://localhost:8080/krankheit/" + title);
 		},
 		search: function(searchWord){
 			return $http.get("http://localhost:8080/search/" + searchWord);
 		},
 		krankheitEntfernen: function(title){
 			return $http.delete("http://localhost:8080/krankheit/" + title);
 		},
 		hinzuKrankheit: function(document){
 			return $http.post("http://localhost:8080/krankheit/save", document);
 		},
 		prozed: function(){
 			return $http.get("http://localhost:8080/prozedur/query");
 		},
 		infoProzedur: function(title){
 			return $http.get("http://localhost:8080/prozedur/" + title);
 		},
 		prozedurEntfernen: function(title){
 			return $http.delete("http://localhost:8080/prozedur/" + title);
 		},
 		hinzuProzedur: function(document){
 			return $http.post("http://localhost:8080/prozedur/save", document);
 		},
                medika2: function(){
 			return $http.get("http://localhost:8080/medikament2/query");
 		},
 		infoMedikament2: function(title){
 			return $http.get("http://localhost:8080/medikament2/" + title);
 		},
 		medikament2Entfernen: function(title){
 			return $http.delete("http://localhost:8080/medikament2/" + title);
 		},
 		hinzuMedikament2: function(document){
 			return $http.post("http://localhost:8080/medikament2/save", document);
 		},
 		medikament: function(){
 			return $http.get("http://localhost:8080/medikament/query");
 		},
 		icdGesamt: function(){
 			return $http.get("http://localhost:8080/icdnummer/query");
 		},
 		icdHaupt: function(){
 			return $http.get("http://localhost:8080/icdnummer/read/haupt");
 		},
 		icdNeben: function(){
 			return $http.get("http://localhost:8080/icdnummer/read/neben");
 		}
 	}

 });