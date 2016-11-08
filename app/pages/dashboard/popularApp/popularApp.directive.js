/**
 * @author Doleksii
 * created on 11.09.2016
 */
(function () {
  'use strict';

  angular.module('TreeAdmin.pages.dashboard')
      .directive('popularApp', popularApp);

  /** @ngInject */
  function popularApp() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/popularApp/popularApp.html'
    };
  }
})();