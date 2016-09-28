(function() {
	'use strict';
	angular.module('app')
	.controller('ChatController', ChatController);

	function ChatController($scope, $state, $stateParams) {
		$scope.newMessage = {};

		$scope.createMessage = function () {
			console.log($scope.user);
			UserFactory.createMessage($scope.newMessage).then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				getMessages();
			})
		};

		if($stateParams.id) {
			getMessages();
		}

		var getMessages = function () {
			UserFactory.getMessages($stateParams.id).then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				$scope.messages = res;
			})
		}
	}
})();
