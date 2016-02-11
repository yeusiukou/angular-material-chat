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
      controllerAs: 'main'
    };

    return directive;

  function MainController($scope) {
    var main = this;

    main.user = {
      name: faker.name.findName(),
      avatar: faker.image.avatar()
    };
  }
  }

})();
