(function() {
  'use strict';

  angular
    .module('tube2srt')
    .directive('byMain', byMain);

  function byMain(){
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    };

    return directive;

  function MainController($scope) {
    var vm = this;

    // this.openChat = openChat;

    // function openChat(user){
    //   $scope.$broadcast("OPEN_CHAT", user);
    // }
  }
  }

})();
