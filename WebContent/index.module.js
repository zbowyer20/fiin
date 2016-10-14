(function() {
  'use strict';

  angular
    .module('pwapp', ['ui.router', 'ui.bootstrap'])
    .run(function($rootScope, $state) {
    	$rootScope.$state = $state;
    });

})();
