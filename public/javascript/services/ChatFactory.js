(function() {
  'use strict';
  angular.module('app')
    .factory('ChatFactory', ChatFactory);

  function ChatFactory($http, $q) {
    var thisFactory = {};

    thisFactory.createMessage = function(newMessage) {
      var q = $q.defer();
      $http.post('/chat/create', newMessage).success(function(res) {
        q.resolve(res);
      });
      return q.promise;
    };

    thisFactory.getMessages = function(chatId) {
      var q = $q.defer();
      $http.get('http://104.131.126.34:1337/api/v1/rvajs', chatId).success(function(res) {
        q.resolve(res);
      });
      return q.promise;
    };

    return thisFactory;
  }
})();