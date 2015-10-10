
angular.module('starter.controllers', ['ionic-material','ngAnimate','ionMdInput'])

.controller('AppCtrl', function ($scope, $stateParams, HearthStoneService) {
    $scope.title = "Hearth Stone Quiz";
    $(".classic-card").flip();
    // var data = HearthStoneService.query();
    // data.then(function(result){  // this is only run after $http completes
    //     $scope.provas = result.response;
    // }); 
});
