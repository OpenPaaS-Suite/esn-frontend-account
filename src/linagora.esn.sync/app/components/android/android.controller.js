'use strict';

const showdown = require('showdown');

require('../../services/mardown-renderer-service.js');

angular.module('linagora.esn.sync')

  .controller('syncAndroidController', function($scope, $sce, markdownRendererService) {
    $scope.user = {};
    const self = this;

    self.$onInit = $onInit;
    function $onInit() {
      const converter = new showdown.Converter();

      markdownRendererService.getDefaultLanguage().then(language => {
        const markdownFile = require(`!!html-loader!../../../i18n/guides/android/${language}.md`);

        $scope.html = converter.makeHtml(markdownFile);
        $scope.newHTML = $scope.html.replaceAll('user.preferredEmail', 'asma1ayari@gmail.com');
        $scope.input = $sce.trustAsHtml($scope.newHTML);
      });
    }
  });

