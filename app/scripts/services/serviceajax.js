'use strict';

/**
 * @ngdoc service
 * @name sbAdminApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the sbAdminApp.
 */
angular.module('sbAdminApp')
        //var apiServer = "http://prokimedo.forwiss.uni-passau.de/prokimedo/standards/api";
    .factory('serviceAjax', function serviceAjax($http) {
        //            $http.get('resources/application.properties').then(function (response) {
        //                var url = response.data.url;
        //                console.log('url is ', response.data.url);
        //            });
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
                return $http.get(apiServer + "/medikament/query");
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
                return $http.get(apiServer + "/icd/query");
            },
            notesBearbeiten: function (response) {
                return $http.post(apiServer + "/icd/notes/bearbeiten", response);
            },
            notesEntfernen: function (response) {
                return $http.post(apiServer + "/icd/notes/entfernen", response);
            },
            infoICDNummer: function (pzn) {
                return $http.post(apiServer + "/icd/info", pzn);
            },
            updateICDNummer: function (icdnummer) {
                return $http.post(apiServer + "/icd/update", icdnummer);
            },
            icdnummerEntfernen: function (icdnummer) {
                return $http.post(apiServer + "/icd/delete", icdnummer);
            },
            icdnummerVersion: function () {
                return $http.get(apiServer + "/icd/version");
            },
            icdnummerVersionRead: function (version) {
                return $http.post(apiServer + "/icd/version/read", version);
            },
            saveICDNummer: function (icdnummer) {
                return $http.post(apiServer + "/icd/save", icdnummer);
            },
            icdnummerListUsed: function (list) {
                return $http.post(apiServer + "/icd/search/used/", list);
            },
            icdnummerUsed: function (icdnummer) {
                return $http.post(apiServer + "/icd/search/used/icd", icdnummer);
            },
            icdFile: function (file, version) {
                var fd = new FormData();
                fd.append('file', file);
                return $http.post(apiServer + "/icd/save/" + version, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
            },
            imageFile: function (file, title) {
                var fd = new FormData();
                fd.append('file', file);
                var tit = title;
                var Indata = {title:'title',fd:'file'};

                return $http.post(apiServer + "/image/save/" ,Indata, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
            },
            infoImage: function (title) {
                return $http.get(apiServer + "/image/"+ title);
            },
            updateImage: function (image) {
                return $http.post(apiServer + "/image/update", image);
            },
            deleteImage: function (title) {
                return $http.get(apiServer + "/image/delete/" + title);
            },
            QueryImage: function () {
                return $http.get(apiServer + "/image/query");
            }

        };
    });
