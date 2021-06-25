'use strict';

const showdown = require('showdown');

require('../../services/mardown-renderer-service.js');

angular.module('linagora.esn.sync')

  .controller('syncOutlookController', function($scope, $sce, markdownRendererService) {
    const self = this;

    self.$onInit = $onInit;
    function $onInit() {
      const converter = new showdown.Converter();

      markdownRendererService.getDefaultLanguage().then(language => {
        const markdownFile = require(`!!html-loader!../../../i18n/guides/outlook/${language}.md`);

        $scope.html = converter.makeHtml(markdownFile);
        $scope.input = $sce.trustAsHtml($scope.html);
      });
    }
  });

