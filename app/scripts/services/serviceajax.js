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
                versionningKrankheit: function (krankheit) {
                    return $http.post("http://localhost:8080/krankheit/versionnig/bearbeiten", krankheit);
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
                versionningProzedur: function (prozedur) {
                    return $http.post("http://localhost:8080/prozedur/versionnig/bearbeiten", prozedur);
                },
                medika2: function () {
                    return $http.get("http://localhost:8080/medikament2/query");
                },
                infoMedikament2: function (title) {
                    return $http.get("http://localhost:8080/medikament2/" + title);
                },
                medikament2Entfernen: function (title) {
                    return $http.delete("http://localhost:8080/medikament2/" + title);
                },
                hinzuMedikament2: function (document) {
                    return $http.post("http://localhost:8080/medikament2/save", document);
                },
                medikament: function () {
                    return $http.get("http://localhost:8080/medikament/query");
                },
                medikamentRead: function () {
                    return $http.get("http://localhost:8080/medikament/read");
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
                notesBearbeiten: function (response) {
                    return $http.post("http://localhost:8080/icdnummer/notes/bearbeiten", response);
                },
                notesEntfernen: function (response) {
                    return $http.post("http://localhost:8080/icdnummer/notes/entfernen", response);
                },
                infoMedikament: function (pzn) {
                    return $http.post("http://localhost:8080/medikament/info", pzn);
                },
                updateMedikament: function (medikament) {
                    return $http.post("http://localhost:8080/medikament/update", medikament);
                },
                medikamentEntfernen: function (medikament) {
                    return $http.post("http://localhost:8080/medikament/delete", medikament);
                },
                medikamentVersion: function () {
                    return $http.get("http://localhost:8080/medikament/version");
                },
                medikamentVersionRead: function (version) {
                    return $http.post("http://localhost:8080/medikament/version/read", version);
                },
                saveMedikament: function (medikament) {
                    return $http.post("http://localhost:8080/medikament/save", medikament);
                },
                medikamentListUsed: function (list) {
                    return $http.post("http://localhost:8080/medikament/search/used/", list);
                },
                medikamentUsed: function (medikament) {
                    return $http.post("http://localhost:8080/medikament/search/used/medikament", medikament);
                },
                medFile: function (file, version) {
                    var fd = new FormData();
                    fd.append('file', file);
                    return $http.post("http://localhost:8080/medikament/save/" + version, fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })

                }

            }
        });