/**
 * @author doleksii
 * created on 11.09.2016
 */
(function () {
  'use strict';

  angular.module('TreeAdmin.pages.ui.buttons')
      .controller('ButtonPageCtrl', ButtonPageCtrl);

  /** @ngInject */
  function ButtonPageCtrl($scope, $timeout) {
    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };
  }

})();
