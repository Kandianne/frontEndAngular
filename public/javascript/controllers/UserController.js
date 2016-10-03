(function() {
	'use strict';
	angular.module('app')
	.controller('UserController', UserController);

	function UserController($scope, $state, UserFactory, $localStorage) {
    $scope.newUser = {};
		$scope.user = {};

		$scope.register = function () {
			console.log($scope.newUser);
			UserFactory.register($scope.newUser).then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				console.log(res);
				$scope.loggedInUser = res;
				getChatUsers();
				$state.go('Users');
			})
		};

		$scope.login = function () {
			UserFactory.login($scope.user).then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				console.log(res);
				$scope.loggedInUser = res.user;
				$localStorage.user = res.user;
				getChatUsers();
				$state.go('Users');
			})
		};

		var getChatUsers = function () {
			UserFactory.getChatUsers().then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				console.log('users', res);
				$scope.chatUsers = res;
				$state.go('Users');
			})
		}


  }
})();
