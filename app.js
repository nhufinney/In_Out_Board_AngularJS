var signIn = angular.module('signIn', ['ui.router']);

    signIn.config(function($stateProvider){

        $stateProvider.state('home', {
            url:"",
            templateUrl: "partials/home.html"
        });

        $stateProvider.state('signIn',{
            url: "/signIn",
            templateUrl: "partials/signIn.html",
            controller: "StudentsCtrl"
        });

        $stateProvider.state('whoHere',{
            url: "/whoHere",
            templateUrl: "partials/whoHere.html",
            controller: "StudentsCtrl"
        });

});
