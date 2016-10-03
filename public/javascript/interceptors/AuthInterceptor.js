(function() {
  'use strict';

  angular.module('app')
    .factory('AuthInterceptor', [
      '$q', '$injector', '$localStorage',
      function(
        $q, $injector, $localStorage
      ) {
        return {

          request: function requestCallback(config) {
            var token;

            // Yeah we have some user data on local storage
            if ($localStorage.credentials) {
              token = $localStorage.credentials.token;
            }

            // Yeah we have a token
            if (token) {
              config.headers.authorization = 'Bearer ' + token;
            }

            return config;
          },
          
        };
      }
    ])
  ;
}());
