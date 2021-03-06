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
//            $http.get('resources/application.properties').then(function (response) {
//                var url = response.data.url;
//                console.log('url is ', response.data.url);
//            });
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
                    return $http.get("http://localhost:8080/krankheit/delete/" + title);
                },
                hinzuKrankheit: function (document) {
                    return $http.post("http://localhost:8080/krankheit/save", document);
                },
                bearbeitenKrankheit: function (document) {
                    return $http.post("http://localhost:8080/krankheit/update", document);
                },
                versionningKrankheit: function (krankheit) {
                    return $http.post("http://localhost:8080/krankheit/versionnig/bearbeiten", krankheit);
                },
                versionningIcdKrankheit: function (krankheit) {
                    return $http.post("http://localhost:8080/krankheit/versionnig/icd/bearbeiten", krankheit);
                },
                prozed: function () {
                    return $http.get("http://localhost:8080/prozedur/query");
                },
                infoProzedur: function (title) {
                    return $http.get("http://localhost:8080/prozedur/" + title);
                },
                prozedurEntfernen: function (title) {
                    return $http.get("http://localhost:8080/prozedur/delete/" + title);
                },
                hinzuProzedur: function (document) {
                    return $http.post("http://localhost:8080/prozedur/save", document);
                },
                bearbeitenProzedur: function (document) {
                    return $http.post("http://localhost:8080/prozedur/update", document);
                },
                versionningProzedur: function (prozedur) {
                    return $http.post("http://localhost:8080/prozedur/versionnig/bearbeiten", prozedur);
                },
                versionningIcdProzedur: function (prozedur) {
                    return $http.post("http://localhost:8080/prozedur/versionnig/icd/bearbeiten", prozedur);
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
                medikamentRead: function () {
                    return $http.get("http://localhost:8080/medikament/query");
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
                medikamentConflict: function () {
                    return $http.get("http://localhost:8080/medikament/read/conflict/");
                },
                medikamentDeleteConflict: function (medikament) {
                    return $http.post("http://localhost:8080/medikament/delete/conflict/", medikament);
                },
                medFile: function (file, version) {
                    var fd = new FormData();
                    fd.append('file', file);
                    return $http.post("http://localhost:8080/medikament/save/" + version, fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })

                },
                icdRead: function () {
                    return $http.get("http://localhost:8080/icd/query");
                },
                notesBearbeiten: function (response) {
                    return $http.post("http://localhost:8080/icd/notes/bearbeiten", response);
                },
                notesEntfernen: function (response) {
                    return $http.post("http://localhost:8080/icd/notes/entfernen", response);
                },
                infoICDNummer: function (pzn) {
                    return $http.post("http://localhost:8080/icd/info", pzn);
                },
                updateICDNummer: function (icdnummer) {
                    return $http.post("http://localhost:8080/icd/update", icdnummer);
                },
                icdnummerEntfernen: function (icdnummer) {
                    return $http.post("http://localhost:8080/icd/delete", icdnummer);
                },
                icdnummerVersion: function () {
                    return $http.get("http://localhost:8080/icd/version");
                },
                icdnummerVersionRead: function (version) {
                    return $http.post("http://localhost:8080/icd/version/read", version);
                },
                saveICDNummer: function (icdnummer) {
                    return $http.post("http://localhost:8080/icd/save", icdnummer);
                },
                icdnummerListUsed: function (list) {
                    return $http.post("http://localhost:8080/icd/search/used/", list);
                },
                icdnummerConflict: function () {
                    return $http.get("http://localhost:8080/icd/read/conflict/");
                },
                icdnummerDeleteConflict: function (icd) {
                    return $http.post("http://localhost:8080/icd/delete/conflict/", icd);
                },
                icdnummerUsed: function (icdnummer) {
                    return $http.post("http://localhost:8080/icd/search/used/icd", icdnummer);
                },
                icdFile: function (file, version) {
                    var fd = new FormData();
                    fd.append('file', file);
                    return $http.post("http://localhost:8080/icd/save/" + version, fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    });
                },
                imageFile: function (file, title) {
                    var fd = new FormData();
                    fd.append('file', file);
//                    var tit = title;
//                     var Indata = {title:'title',fd:'file'};

                    return $http.post("http://localhost:8080/image/save/" + title, fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    });
                },
                infoImage: function (title) {
                    return $http.get("http://localhost:8080/image/" + title);
                },
                updateImage: function (image) {
                    return $http.post("http://localhost:8080/image/update", image);
                },
                deleteImage: function (title) {
                    return $http.get("http://localhost:8080/image/delete/" + title);
                },
                QueryImage: function () {
                    return $http.get("http://localhost:8080/image/query");
                }

            };
        });