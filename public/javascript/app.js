(function () {
  'use strict';
  angular.module('app', ['ui.router', 'ngMaterial'])
    .config(Config);

  function Config($stateProvider, $urlRouterProvider) {
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
