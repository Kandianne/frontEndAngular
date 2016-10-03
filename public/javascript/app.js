(function () {
  'use strict';
  angular.module('app', ['ui.router', 'ngMaterial','ngStorage'])
    .config(Config);

  function Config($stateProvider, $urlRouterProvider,$httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'];
    $httpProvider.interceptors.push('AuthInterceptor');
    
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
      url: '/chat/:id',
      templateUrl: '/templates/chat.html'
    });
    $urlRouterProvider.otherwise('/');
  }
})();
