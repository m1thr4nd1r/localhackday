var services = angular.module('starter.services', ['ngResource']);

services.factory("HearthStoneService", ['$http', function($http){
    return { query: getData };
    function getData() {
        return httpRequest($http, "http://localhost:8100/api/provaList/format/json", "GET");
    };
}]);

function httpRequest($http, url, method){
    return $http({ method: method, url: url }).then(function(result){
        return result.data;
    });
}