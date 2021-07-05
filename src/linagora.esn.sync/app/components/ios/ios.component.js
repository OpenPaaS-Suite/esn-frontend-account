'use strict';

angular.module('linagora.esn.sync')

  .component('syncIos', {
    template: require('./ios.pug'),
    controller: 'syncIosController'
  });
