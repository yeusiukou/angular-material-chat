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

  function MainController($timeout, webDevTec, toastr, $mdToast) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1454691257479;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      $mdToast.show($mdToast.simple().textContent('Hello!'));
      // Could also do $mdToast.showSimple('Hello');
      // logger.info("Hello");
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
  }

})();
