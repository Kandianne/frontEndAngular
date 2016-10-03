(function() {
	'use strict';
	angular.module('app')
	.controller('ChatController', ChatController);

	function ChatController($scope, ChatFactory, $localStorage) {
		$scope.chat = {};

		console.log($localStorage.user.id)
		$scope.getChatRoom = function () {
      ChatFactory.getChatRoom().then(function(res, err) {
				if(err) {
					return console.log(err);
				}
				$scope.room = res.chats;
			})
		};

    $scope.createMessage = function () {
      $scope.chat.senderUser = $localStorage.user.id;
      ChatFactory.createMessage($scope.chat).then(function(res, err) {
        if(err) {
          return console.log(err);
        }
        $scope.getChatRoom();
        $scope.chat = null;
      })
    };

    $scope.getChatRoom();

	}
})();
