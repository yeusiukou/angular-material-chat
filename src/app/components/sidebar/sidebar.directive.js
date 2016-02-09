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
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController(moment) {
      var vm = this;

      vm.users = [];
      getUsers();

      function getUsers(){
        for(var i=0; i<15; i++)
          vm.users.push({
            name: faker.name.findName(),
            image: faker.image.avatar()
          });
      }
    }
  }

})();
