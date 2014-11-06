'use strict';

/**
 * @ngdoc function
 * @name lowVolumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lowVolumeApp
 */
angular.module('lowVolumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
