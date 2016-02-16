(function() {
  'use strict';

  angular
  .module('tube2srt')
  .directive('byChat', byChat);

  /** @ngInject */
  function byChat() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/chat/chat.html',
      controller: ChatController,
      controllerAs: 'chat',
      link: scrollOnNew
    };

    return directive;

    /** @ngInject */
    function ChatController($rootScope, $scope, $timeout) {
      var chat = this;
      chat.messages = [];
      chat.sendMessage = sendMessage;

      var user = $scope.main.user;
      var interlocutor;

      $rootScope.$on("OPEN_CHAT", function(event, user){
        chat.messages = [];
        interlocutor = user;
        getMessages();
      });

      function sendMessage(){
        chat.messages.push({
          user: true,
          text: chat.myMessage,
          name: user.name,
          avatar: user.avatar
        });
        chat.myMessage = "";

        // fake reply
        $timeout(function(){
          pushFakeMessage();
        }, 1000);
      }

      function getMessages(){
        var amount = Math.random()*9;
        for(var i=0; i<amount; i++)
          pushFakeMessage();
        scrollDown();
      }

      function pushFakeMessage(){
        chat.messages.push( {
          text: faker.lorem.paragraph(),
          name: interlocutor.name,
          avatar: interlocutor.image
        } );
      }

    }
    function scrollOnNew(scope, element){
      scope.$watchCollection('chat.messages', function() {
        scrollDown();
      });
    }
    function scrollDown(){
      var list = angular.element( document.querySelector( '#chat-content' ) );
      var scrollHeight = list.prop('scrollHeight');
      list.animate({scrollTop: scrollHeight}, 500);
    }
  }

})();
