/**
 * @author doleksii
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('TreeAdmin.theme')
      .directive('baPanelTree', baPanelTree);

  /** @ngInject */
  function baPanelTree(baPanelTreeHelper, $window, $rootScope) {
    var bodyBgSize;

    baPanelTreeHelper.bodyBgLoad().then(function() {
      bodyBgSize = baPanelTreeHelper.getBodyBgImageSizes();
    });

    $window.addEventListener('resize', function() {
      bodyBgSize = baPanelTreeHelper.getBodyBgImageSizes();
    });

    return {
      restrict: 'A',
      link: function($scope, elem) {
        if(!$rootScope.$isMobile) {
          baPanelTreeHelper.bodyBgLoad().then(function () {
            setTimeout(recalculatePanelStyle);
          });
          $window.addEventListener('resize', recalculatePanelStyle);

          $scope.$on('$destroy', function () {
            $window.removeEventListener('resize', recalculatePanelStyle);
          });
        }

        function recalculatePanelStyle() {
          if (!bodyBgSize) {
            return;
          }
          elem.css({
            backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
            backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
          });
        }

      }
    };
  }

})();
