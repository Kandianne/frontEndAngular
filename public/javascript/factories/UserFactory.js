(function () {
  'use strict';
  angular.module('app')
    .factory('UserFactory', UserFactory);

  function UserFactory($http, $q) {
    var thisFactory = {};

    thisFactory.register = function (newUser) {
      var q = $q.defer();
      $http.post('http://104.236.80.163:1337/api/v1/auth/local/register', newUser).success(function (res) {
        q.resolve(res);
      });
      return q.promise;
    };

    thisFactory.login = function (user) {
      var q = $q.defer();
      console.log(user)
      $http.post('http://104.236.80.163:1337/api/v1/auth/local/login', user).success(function (res) {
        q.resolve(res);
      });
      return q.promise;
    };

    thisFactory.getChatUsers = function() {
      var q = $q.defer();
      $http.get('http://104.236.80.163:1337/user').success(function(res) {
        q.resolve(res);
      });
      return q.promise;
    };

    return thisFactory;
  }
})();