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
        //var apiServer = "http://prokimedo.forwiss.uni-passau.de/prokimedo/standards/api";
        var apiServer = "http://localhost:8080/standards/api";

        return{
            krank: function () {
                return $http.get(apiServer + "/krankheit/query");
            },
            infoKrankheit: function (title) {
                return $http.get(apiServer + "/krankheit/" + title);
            },
            search: function (searchWord) {
                return $http.get(apiServer + "/search/" + searchWord);
            },
            krankheitEntfernen: function (title) {
                return $http.get(apiServer + "/krankheit/delete/" + title);
            },
            hinzuKrankheit: function (document) {
                return $http.post(apiServer + "/krankheit/save", document);
            },
            bearbeitenKrankheit: function (document) {
                return $http.post(apiServer + "/krankheit/update", document);
            },
            versionningKrankheit: function (krankheit) {
                return $http.post(apiServer + "/krankheit/versionnig/bearbeiten", krankheit);
            },
            versionningIcdKrankheit: function (krankheit) {
                return $http.post(apiServer + "/krankheit/versionnig/icd/bearbeiten", krankheit);
            },
            prozed: function () {
                return $http.get(apiServer + "/prozedur/query");
            },
            infoProzedur: function (title) {
                return $http.get(apiServer + "/prozedur/" + title);
            },
            prozedurEntfernen: function (title) {
                return $http.get(apiServer + "/prozedur/delete/" + title);
            },
            hinzuProzedur: function (document) {
                return $http.post(apiServer + "/prozedur/save", document);
            },
            bearbeitenProzedur: function (document) {
                return $http.post(apiServer + "/prozedur/update", document);
            },
            versionningProzedur: function (prozedur) {
                return $http.post(apiServer + "/prozedur/versionnig/bearbeiten", prozedur);
            },
            versionningIcdProzedur: function (prozedur) {
                return $http.post(apiServer + "/prozedur/versionnig/icd/bearbeiten", prozedur);
            },
            medika2: function () {
                return $http.get(apiServer + "/medikament2/query");
            },
            infoMedikament2: function (title) {
                return $http.get(apiServer + "/medikament2/" + title);
            },
            medikament2Entfernen: function (title) {
                return $http.delete(apiServer + "/medikament2/" + title);
            },
            hinzuMedikament2: function (document) {
                return $http.post(apiServer + "/medikament2/save", document);
            },
            medikamentRead: function () {
                return $http.get(apiServer + "/medikament/read");
            },
            infoMedikament: function (pzn) {
                return $http.post(apiServer + "/medikament/info", pzn);
            },
            updateMedikament: function (medikament) {
                return $http.post(apiServer + "/medikament/update", medikament);
            },
            medikamentEntfernen: function (medikament) {
                return $http.post(apiServer + "/medikament/delete", medikament);
            },
            medikamentVersion: function () {
                return $http.get(apiServer + "/medikament/version");
            },
            medikamentVersionRead: function (version) {
                return $http.post(apiServer + "/medikament/version/read", version);
            },
            saveMedikament: function (medikament) {
                return $http.post(apiServer + "/medikament/save", medikament);
            },
            medikamentListUsed: function (list) {
                return $http.post(apiServer + "/medikament/search/used/", list);
            },
            medikamentUsed: function (medikament) {
                return $http.post(apiServer + "/medikament/search/used/medikament", medikament);
            },
            medFile: function (file, version) {
                var fd = new FormData();
                fd.append('file', file);
                return $http.post(apiServer + "/medikament/save/" + version, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })

            },
            icdRead: function () {
                return $http.get(apiServer + "/icdnummer/read");
            },
            icdHaupt: function () {
                return $http.get(apiServer + "/icdnummer/read/haupt");
            },
            icdGefaeh: function () {
                return $http.get(apiServer + "/icdnummer/read/gefaehrlich");
            },
            notesBearbeiten: function (response) {
                return $http.post(apiServer + "/icdnummer/notes/bearbeiten", response);
            },
            notesEntfernen: function (response) {
                return $http.post(apiServer + "/icdnummer/notes/entfernen", response);
            },
            infoICDNummer: function (pzn) {
                return $http.post(apiServer + "/icdnummer/info", pzn);
            },
            updateICDNummer: function (icdnummer) {
                return $http.post(apiServer + "/icdnummer/update", icdnummer);
            },
            icdnummerEntfernen: function (icdnummer) {
                return $http.post(apiServer + "/icdnummer/delete", icdnummer);
            },
            icdnummerVersion: function () {
                return $http.get(apiServer + "/icdnummer/version");
            },
            icdnummerVersionRead: function (version) {
                return $http.post(apiServer + "/icdnummer/version/read", version);
            },
            saveICDNummer: function (icdnummer) {
                return $http.post(apiServer + "/icdnummer/save", icdnummer);
            },
            icdnummerListUsed: function (list) {
                return $http.post(apiServer + "/icdnummer/search/used/", list);
            },
            icdnummerUsed: function (icdnummer) {
                return $http.post(apiServer + "/icdnummer/search/used/icdnummer", icdnummer);
            },
            icdFile: function (file, version) {
                var fd = new FormData();
                fd.append('file', file);
                return $http.post(apiServer + "/icdnummer/save/" + version, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })

            }

        }
    });
