/**
 * Created by k.danovsky on 12.05.2016.
 */

(function () {
  'use strict';

  angular.module('TreeAdmin.theme')
    .service('themeLayoutSettings', themeLayoutSettings);

  /** @ngInject */
  function themeLayoutSettings(baConfig) {
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    var mobileClass = isMobile ? 'mobile' : '';
    var TreeClass = baConfig.theme.Tree ? 'Tree-theme' : '';
    angular.element(document.body).addClass(mobileClass).addClass(TreeClass);

    return {
      Tree: baConfig.theme.Tree,
      mobile: isMobile,
    }
  }

})();