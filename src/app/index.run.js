(function() {
  'use strict';

  angular
    .module('tube2srt')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $mdMedia) {

    $log.debug('runBlock end');
  }

})();
