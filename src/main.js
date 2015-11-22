export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    // Uncomment this if you want some development logs
    //.developmentLogging()
    .plugin('aurelia-firebase', config => {
      config
        .setFirebaseUrl('https://aurelia-firebase.firebaseio.com/')
        .setMonitorAuthChange(true);
    })
    .plugin('aurelia-animator-css');
  aurelia.start().then(() => aurelia.setRoot());
}
