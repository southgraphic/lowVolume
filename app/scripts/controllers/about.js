'use strict';

/**
 * @ngdoc function
 * @name lowVolumeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lowVolumeApp
 */
angular.module('lowVolumeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
