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
      controllerAs: 'vm',
      scope: {
        show: '='
      }
    };

    return directive;

    /** @ngInject */
    function SidebarController($rootScope, $scope, mobileDetector) {
      var vm = this;

      vm.users = [];
      vm.openChat = openChat;
      vm.show = true;
      vm.isMobile = mobileDetector.detect();
      getUsers();
      openChat(vm.users[0]);

      function getUsers(){
        for(var i=0; i<15; i++)
          vm.users.push({
            id: i,
            name: faker.name.findName(),
            image: faker.image.avatar()
          });
      }

      function openChat(user){
        $rootScope.$emit("OPEN_CHAT", user);
      }
    }
  }

})();
