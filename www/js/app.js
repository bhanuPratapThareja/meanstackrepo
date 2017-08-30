var app = angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })

  $urlRouterProvider.otherwise('main');

}])
