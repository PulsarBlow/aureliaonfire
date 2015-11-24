System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-firebase', function (config) {
      config.setFirebaseUrl('https://aurelia-firebase.firebaseio.com/').setMonitorAuthChange(true);
    }).plugin('aurelia-animator-css');
    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUd2QixNQUFNLENBQUMsa0JBQWtCLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDcEMsWUFBTSxDQUNILGNBQWMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUMxRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQixDQUFDLENBQ0QsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDbEMsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzthQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUU7S0FBQSxDQUFDLENBQUM7R0FDL0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC8vIFVuY29tbWVudCB0aGlzIGlmIHlvdSB3YW50IHNvbWUgZGV2ZWxvcG1lbnQgbG9nc1xyXG4gICAgLy8uZGV2ZWxvcG1lbnRMb2dnaW5nKClcclxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtZmlyZWJhc2UnLCBjb25maWcgPT4ge1xyXG4gICAgICBjb25maWdcclxuICAgICAgICAuc2V0RmlyZWJhc2VVcmwoJ2h0dHBzOi8vYXVyZWxpYS1maXJlYmFzZS5maXJlYmFzZWlvLmNvbS8nKVxyXG4gICAgICAgIC5zZXRNb25pdG9yQXV0aENoYW5nZSh0cnVlKTtcclxuICAgIH0pXHJcbiAgICAucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpO1xyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
