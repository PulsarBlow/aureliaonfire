var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.json');
var config = {
  force: true,
  packagePath: '.',
  bundles: bundles.bundles
};

gulp.task('bundle', ['build'], function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});
