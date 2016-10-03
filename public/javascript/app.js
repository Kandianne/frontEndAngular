(function () {
  'use strict';
  angular.module('app', ['ui.router', 'ngMaterial','ngStorage'])
    .config(Config);

  function Config($stateProvider, $urlRouterProvider,$httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $stateProvider
      .state('Home', {
      url: '/'
      })
      .state('Register', {
        url: '/register',
        templateUrl: '/templates/register.html'
      })
      .state('Users', {
        url: '/users',
        templateUrl: '/templates/users.html'
      }).state('Chat', {
      url: '/chat',
      templateUrl: '/templates/chat.html'
    });
    $urlRouterProvider.otherwise('/');
  }
})();
