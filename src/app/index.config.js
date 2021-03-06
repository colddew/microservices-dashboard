(function() {
  'use strict';

  angular
    .module('microServicesGui')
    .config(config)
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

  /** @ngInject */
  function config($logProvider) {

    // enable log debug
    $logProvider.debugEnabled(true);

  }

})();
