'use strict';

angular.module('linagora.esn.sync')

  .component('syncOutlook', {
    template: require('./outlook.pug'),
    controller: 'syncOutlookController'
  });
