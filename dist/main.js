System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-firebase', function (config) {
      config.setFirebaseUrl('https://aurelia-firebase.firebaseio.com/').setMonitorAuthChange(true);
    }).plugin('aurelia-animator-css');
    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixNQUFNLENBQUMsa0JBQWtCLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDcEMsWUFBTSxDQUNILGNBQWMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUMxRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQixDQUFDLENBQ0QsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDbEMsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0dBQ3hDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAucGx1Z2luKCdhdXJlbGlhLWZpcmViYXNlJywgY29uZmlnID0+IHtcbiAgICAgIGNvbmZpZ1xuICAgICAgICAuc2V0RmlyZWJhc2VVcmwoJ2h0dHBzOi8vYXVyZWxpYS1maXJlYmFzZS5maXJlYmFzZWlvLmNvbS8nKVxuICAgICAgICAuc2V0TW9uaXRvckF1dGhDaGFuZ2UodHJ1ZSk7XG4gICAgfSlcbiAgICAucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpO1xuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
