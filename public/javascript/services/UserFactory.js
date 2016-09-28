(function() {
	'use strict';
	angular.module('app')
	.factory('UserFactory', UserFactory);

	function UserFactory($http, $q) {
		var thisFactory = {};

		thisFactory.register = function(newUser) {
			var q = $q.defer();
			$http.post('/user/create', newUser).success(function(res) {
				q.resolve(res);
			});
			return q.promise;
		};

		thisFactory.login = function(user) {
			var q = $q.defer();
			$http.post('/user/login', user).success(function(res) {
				q.resolve(res);
			});
			return q.promise;
		};

		thisFactory.getChatUsers = function() {
			var q = $q.defer();
			$http.get('/user/login', user).success(function(res) {
				q.resolve(res);
			});
			return q.promise;
		};

		return thisFactory;
	}
})();
