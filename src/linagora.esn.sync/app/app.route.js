'use strict';

angular.module('linagora.esn.sync')

  .config(function($stateProvider) {
    $stateProvider
      .state('controlcenter.sync', {
        url: '/sync',
        template: '<sync-main />'
      })
      .state('controlcenter.sync.android', {
        url: '/android',
        views: {
          sync: {
            template: '<sync-android />'
          }
        }
      })
      .state('controlcenter.sync.ios', {
        url: '/ios',
        views: {
          sync: {
            template: '<sync-ios />'
          }
        }
      })
      .state('controlcenter.sync.thunderbird', {
        url: '/thunderbird',
        views: {
          sync: {
            template: '<sync-thunderbird />'
          }
        }
      })
      .state('controlcenter.sync.outlook', {
        url: '/outlook',
        views: {
          sync: {
            template: '<sync-outlook />'
          }
        }
      });

  });
