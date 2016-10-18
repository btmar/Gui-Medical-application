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
                krank: function () {
                    return $http.get("http://localhost:8080/krankheit/query");
                },
                infoKrankheit: function (title) {
                    return $http.get("http://localhost:8080/krankheit/" + title);
                },
                search: function (searchWord) {
                    return $http.get("http://localhost:8080/search/" + searchWord);
                },
                krankheitEntfernen: function (title) {
                    return $http.delete("http://localhost:8080/krankheit/" + title);
                },
                hinzuKrankheit: function (document) {
                    return $http.post("http://localhost:8080/krankheit/save", document);
                },
                prozed: function () {
                    return $http.get("http://localhost:8080/prozedur/query");
                },
                infoProzedur: function (title) {
                    return $http.get("http://localhost:8080/prozedur/" + title);
                },
                prozedurEntfernen: function (title) {
                    return $http.delete("http://localhost:8080/prozedur/" + title);
                },
                hinzuProzedur: function (document) {
                    return $http.post("http://localhost:8080/prozedur/save", document);
                },
                medikament: function () {
                    return $http.get("http://localhost:8080/medikament/query");
                },
                infoMedikament: function (pzn) {
                    return $http.post("http://localhost:8080/medikament/info", pzn);
                },
                update: function () {
                    return $http.get("http://localhost:8080/update/query");
                },
                prozedUpdate: function () {
                    return $http.get("http://localhost:8080/prozedur/queryPUpdate");
                },
                krankUpdate: function () {
                    return $http.get("http://localhost:8080/krankheit/queryKUpdate");
                },
                updateTKrankheit: function () {
                    return $http.post("http://localhost:8080/Krankheit/save", document);
                },
                updateTProzedur: function () {
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
                medFile: function (file) {
                    console.log('serviceajax arrived');
                    var fd = new FormData();
                    fd.append('file', file);
                    return $http.post("http://localhost:8080/medikament/save/", fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })

                }
            }

        });