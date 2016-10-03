(function () {
  'use strict';
  angular.module('app')
    .factory('ChatFactory', ChatFactory);

  function ChatFactory($http, $q) {
    var thisFactory = {};

    var rootUrl ="http://104.236.80.163:1337"; // target backend server url

    thisFactory.createMessage = function (chat) {
      var q = $q.defer();
      $http.post(rootUrl + '/api/v1/chat', chat).success(function (res) {
        q.resolve(res);
      });
      return q.promise;
    };

    thisFactory.getChatRoom = function () {
      var q = $q.defer();
      $http.get(rootUrl + '/api/v1/rvajs').success(function (res) {
        q.resolve(res);
      });
      return q.promise;
    };


    return thisFactory;
  }
})();