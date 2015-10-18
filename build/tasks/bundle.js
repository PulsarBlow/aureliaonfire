var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
  force: true,
  packagePath: '.',
  bundles: {
    "dist/app-build": {
      includes: [
        '*/**/*',
        '*.html!text',
        '*.css!text',
        'github:twbs/bootstrap'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/aurelia": {
      includes: [
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding',
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser',
        'github:aurelia/logging-console',
        'github:systemjs/plugin-text@0.0.2'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('bundle', function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});
