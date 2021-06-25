angular.module('linagora.esn.sync')

  .run(cacheTemplates);

function cacheTemplates($templateCache) {
  $templateCache.put('/sync/app/sidebar/sidebar', require('./sidebar/sidebar.pug'));
}
