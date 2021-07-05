'use strict';

angular.module('linagora.esn.sync')

  .component('syncAndroid', {
    template: require('./android.pug'),
    controller: 'syncAndroidController',
    bindings: {
      markdownFile: '='
    }
  });
