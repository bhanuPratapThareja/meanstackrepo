var app = angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })

  $urlRouterProvider.otherwise('main');
  $locationProvider.html5Mode(true);

}])

.run(['$rootScope', function($rootScope){
  
  console.log('run');

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

  })

}])
