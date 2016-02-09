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
      controllerAs: 'chat'
    };

    return directive;

    /** @ngInject */
    function ChatController(moment) {
      var chat = this;

      chat.messages = [];
      chat.avatar = faker.image.avatar();
      chat.name = faker.name.findName();
      getMessages();

      function getMessages(){
        for(var i=0; i<15; i++)
          chat.messages.push({
            text: faker.lorem.paragraph(),
            name: chat.name,
            avatar: chat.avatar
          });
      }
    }
  }

})();
