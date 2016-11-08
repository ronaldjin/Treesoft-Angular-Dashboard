/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('TreeAdmin.pages.ui', [
    'TreeAdmin.pages.ui.typography',
    'TreeAdmin.pages.ui.buttons',
    'TreeAdmin.pages.ui.icons',
    'TreeAdmin.pages.ui.modals',
    'TreeAdmin.pages.ui.grid',
    'TreeAdmin.pages.ui.alerts',
    'TreeAdmin.pages.ui.progressBars',
    'TreeAdmin.pages.ui.notifications',
    'TreeAdmin.pages.ui.tabs',
    'TreeAdmin.pages.ui.slider',
    'TreeAdmin.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
