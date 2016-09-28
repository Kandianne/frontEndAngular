(function () {
  'use strict';
  angular.module('app', ['ui.router'])
    .config(Config);

  function Config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('Home', {
      url: '/'
      })
      .state('RegisterOrLogin', {
        url: '/',
        templateUrl: '/templates/registerOrLogin.html'
      })
      .state('Users', {
        url: '/users/',
        templateUrl: '/templates/users.html'
      }).state('Chat', {
      url: '/chat/:id',
      templateUrl: '/templates/chat.html'
    });
    $urlRouterProvider.otherwise('/');
  }
})();
