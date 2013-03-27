'use strict';


// Declare app level module which depends on filters, and services
angular.module('matteApp', ['matteApp.filters', 'matteApp.services', 'matteApp.directives', 'ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/game.html', controller: MatteCtrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
