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
                medikamentSetList: function(){
 			return $http.get("http://localhost:8080/medikament/setMedikamentList");
 		},
                update: function(){
 			return $http.get("http://localhost:8080/update/query");
 		},
                updateTKrankheit: function(){
 			return $http.post("http://localhost:8080/Krankheit/save", document);
 		},
                updateTProzedur: function(){
 			return $http.post("http://localhost:8080/prozedur/save", document);
 		},
                icdGesamt: function () {
                    return $http.get("http://localhost:8080/icdnummer/query");
                },
                icdHaupt: function () {
                    return $http.get("http://localhost:8080/icdnummer/read/haupt");
                },
                icdGefaeh: function () {
                    return $http.get("http://localhost:8080/icdnummer/read/gefaehrlich");
                },
                infoIcd: function (code) {
                    return $http.post("http://localhost:8080/icdnummer/read/", code);
                },
                icdNeben: function () {
                    return $http.get("http://localhost:8080/icdnummer/read/neben");
                },
                hinzuICDGesamt: function (ICD) {
                    return $http.post("http://localhost:8080/icdnummer/save/gesamt/", ICD);
                },
                updateICDGesamt: function (ICD) {
                    return $http.post("http://localhost:8080/icdnummer/update/gesamt/", ICD);
                },
                icdGesamtEntfernen: function (code) {
                    return $http.post("http://localhost:8080/icdnummer/delete/gesamt/", code);
                },
                icdListUsed: function (code) {
                    return $http.post("http://localhost:8080/icdnummer/search/used/", code);
                },
 	}

 });