/**
 * @author doleksii
 * created on 11.09.2016
 */
(function () {
  'use strict';

  angular.module('TreeAdmin.theme')
      .directive('includeWithScope', includeWithScope);

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict: 'AE',
      templateUrl: function(ele, attrs) {
        return attrs.includeWithScope;
      }
    };
  }

})();
