'use strict';

angular.module('linagora.esn.sync')

  .controller('syncMainController', function() {
    const self = this;

    self.$onInit = $onInit;
    function $onInit() {
      self.iconThunderbird = require('!!file-loader!../../../images/thunderbird_logo.png').default;
      self.iconOutlook = require('!!file-loader!../../../images/outlook_logo.png').default;
      self.iconAndroid = require('!!file-loader!../../../images/android_logo.png').default;
      self.iconIOS = require('!!file-loader!../../../images/ios_logo.png').default;
    }
  });

