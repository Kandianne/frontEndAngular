(function() {
	'use strict';
	angular.module('app')
	.controller('UserController', UserController);

	function UserController($scope, $state, UserFactory) {
		$scope.newUser = {};
		$scope.user = {};

		$scope.register = function () {
			console.log($scope.newUser);
			UserFactory.register($scope.newUser).then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				$scope.loggedInUser = res;
				getChatUsers();
				$state.go('Users');
			})
		};

		$scope.login = function () {
			console.log($scope.user);
			UserFactory.login($scope.user).then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				$scope.loggedInUser = res;
				getChatUsers();
				$state.go('Users');
			})
		};

		var getChatUsers = function () {
			UserFactory.getChatUsers().then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				$scope.chatUsers = res;
				$state.go('Users');
			})
		}

	}
})();
