angular.module('linagora.esn.profile')

  .run(function(dynamicDirectiveService, DynamicDirective) {
    var directive = new DynamicDirective(true, 'profile-menu-profile');

    dynamicDirectiveService.addInjection('profile-menu-profile', directive);
  })
  .run(cacheTemplates);

  function cacheTemplates($templateCache) {
    $templateCache.put('/profile/app/sidebar/sidebar', require('../app/sidebar/sidebar.pug'));
  };
