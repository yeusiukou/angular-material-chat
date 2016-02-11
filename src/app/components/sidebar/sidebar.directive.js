(function() {
  'use strict';

  angular
  .module('tube2srt')
  .directive('bySidebar', bySidebar);

  /** @ngInject */
  function bySidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: SidebarController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function SidebarController($scope) {
      var vm = this;

      vm.users = [];
      vm.openChat = openChat;
      getUsers();

      function getUsers(){
        for(var i=0; i<15; i++)
          vm.users.push({
            id: i,
            name: faker.name.findName(),
            image: faker.image.avatar()
          });
      }

      function openChat(user){
        $scope.$emit("OPEN_CHAT", user);
      }
    }
  }

})();
