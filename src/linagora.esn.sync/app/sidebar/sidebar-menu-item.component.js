'use strict';

angular.module('linagora.esn.sync')

  .component('syncSidebarMenuItem', {
    bindings: {
      icon: '@',
      href: '@',
      label: '@'
    },
    template: require('./sidebar-menu-item.pug')
  });
