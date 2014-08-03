'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
    .module('websiteApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function ($stateProvider) {

        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'views/home.html'
            });
    });
