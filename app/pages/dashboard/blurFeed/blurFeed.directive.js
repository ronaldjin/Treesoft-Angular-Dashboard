/**
 * @author Doleksii
 * created on 11.09.2016
 */
(function () {
  'use strict';

  angular.module('TreeAdmin.pages.dashboard')
      .directive('TreeFeed', TreeFeed);

  /** @ngInject */
  function TreeFeed() {
    return {
      restrict: 'E',
      controller: 'TreeFeedCtrl',
      templateUrl: 'app/pages/dashboard/TreeFeed/TreeFeed.html'
    };
  }
})();