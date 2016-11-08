/**
 * @author Doleksii
 * created on 11.09.2016
 */
(function () {
  'use strict';

  angular.module('TreeAdmin.pages.form')
      .directive('tagInput', tagInput);

  /** @ngInject */
  function tagInput() {
    return {
      restrict: 'A',
      link: function( $scope, elem, attr) {
        $(elem).tagsinput({
          tagClass:  'label label-' + attr.tagInput
        });
      }
    };
  }
})();