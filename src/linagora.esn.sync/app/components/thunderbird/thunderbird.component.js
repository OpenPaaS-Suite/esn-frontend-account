'use strict';

angular.module('linagora.esn.sync')

  .component('syncThunderbird', {
    template: require('./thunderbird.pug'),
    controller: 'syncThunderbirdController'
  });
