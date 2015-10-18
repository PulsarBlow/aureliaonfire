export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-firebase', config => {
      config
        .setFirebaseUrl('https://aurelia-firebase.firebaseio.com/')
        .setMonitorAuthChange(true);
    })
    .plugin('aurelia-animator-css');
  aurelia.start().then(a => a.setRoot());
}
