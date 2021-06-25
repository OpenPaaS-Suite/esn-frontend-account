'use strict';

require('esn-frontend-common-libs/src/frontend/js/modules/core.js');
require('esn-frontend-common-libs/src/frontend/components/dynamic-directive/src/dynamic-directive.js');
require('esn-frontend-common-libs/src/frontend/js/modules/http.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/previous-page.js');
require('esn-frontend-common-libs/src/frontend/js/modules/async-action.js');

angular.module('linagora.esn.sync', [
  'op.dynamicDirective',
  'esn.core',
  'esn.ui',
  'ui.router',
  'ngSanitize'
]);
require('./components/android/android.component.js');
require('./components/android/android.controller.js');
require('./components/controlcenter-menu-entry/controlcenter-menu-entry.js');
require('./components/ios/ios.controller');
require('./components/ios/ios.component.js');
require('./components/main/main.component.js');
require('./components/main/main.controller.js');
require('./components/outlook/outlook.component.js');
require('./components/outlook/outlook.controller.js');
require('./components/thunderbird/thunderbird.component.js');
require('./components/thunderbird/thunderbird.controller.js');
require('./sidebar/sidebar-menu-item.component.js');
require('./sidebar/sidebar.component.js');
require('./services/mardown-renderer-service.js');
require('./app.route.js');
require('./app.run.js');
