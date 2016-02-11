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
    function ChatController($scope) {
      var chat = this;

      chat.messages = [];
      chat.avatar = faker.image.avatar();
      chat.name = faker.name.findName();
      chat.user = {
        name: faker.name.findName(),
        avatar: faker.image.avatar()
      };
      chat.sendMessage = sendMessage;

      $scope.$on("OPEN_CHAT", function(event, user){
        chat.messages = [];
        getMessages(user);
      });

      function sendMessage(){
        chat.messages.push({
          user: true,
          text: chat.myMessage,
          name: chat.user.name,
          avatar: chat.user.avatar
        });
        chat.myMessage = "";
      }

      function getMessages(user){
        for(var i=0; i<5; i++)
          chat.messages.push({
            text: faker.lorem.paragraph(),
            name: user.name,
            avatar: user.image
          });
      }

    }
    function scrollOnNew(scope, element){
      scope.$watchCollection('chat.messages', function() {
        var $list = $(element).find('#chat-content');
        var scrollHeight = $list.prop('scrollHeight');
        $list.animate({scrollTop: scrollHeight}, 500);
      });
    }
  }

})();
