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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUd2QixNQUFNLENBQUMsa0JBQWtCLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDcEMsWUFBTSxDQUNILGNBQWMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUMxRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQixDQUFDLENBQ0QsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDbEMsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzthQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUU7S0FBQSxDQUFDLENBQUM7R0FDL0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC8vIFVuY29tbWVudCB0aGlzIGlmIHlvdSB3YW50IHNvbWUgZGV2ZWxvcG1lbnQgbG9nc1xuICAgIC8vLmRldmVsb3BtZW50TG9nZ2luZygpXG4gICAgLnBsdWdpbignYXVyZWxpYS1maXJlYmFzZScsIGNvbmZpZyA9PiB7XG4gICAgICBjb25maWdcbiAgICAgICAgLnNldEZpcmViYXNlVXJsKCdodHRwczovL2F1cmVsaWEtZmlyZWJhc2UuZmlyZWJhc2Vpby5jb20vJylcbiAgICAgICAgLnNldE1vbml0b3JBdXRoQ2hhbmdlKHRydWUpO1xuICAgIH0pXG4gICAgLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKTtcbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
