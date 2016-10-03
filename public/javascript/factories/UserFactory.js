(function () {
  'use strict';
  angular.module('app')
    .factory('UserFactory', UserFactory);

  function UserFactory($http, $q) {
    var thisFactory = {};

    var rootUrl ="http://192.168.1.133:1337"; // target backend server url
    
    thisFactory.register = function (newUser) {
      var q = $q.defer();
      $http.post(rootUrl + '/api/v1/auth/local/register', newUser).success(function (res) {
        q.resolve(res);
      });
      return q.promise;
    };

    thisFactory.login = function (user) {
      var q = $q.defer();
      console.log(user)
      $http.post(rootUrl + '/api/v1/auth/local/login', user).success(function (res) {
        q.resolve(res);
      });
      return q.promise;
    };

    thisFactory.getChatUsers = function() {
      var q = $q.defer();
      $http.get(rootUrl + '/user').success(function(res) {
        q.resolve(res);
      });
      return q.promise;
    };

    return thisFactory;
  }
})();