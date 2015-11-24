System.register(['nprogress', 'aurelia-framework', 'aurelia-router', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, Redirect, AuthenticationManager, Configuration, App, AuthorizeStep;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_nprogress) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }, function (_aureliaFirebase) {
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
      Configuration = _aureliaFirebase.Configuration;
    }],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia on Fire';
            config.addPipelineStep('authorize', AuthorizeStep);
            config.map([{ route: ['', 'todo'], name: 'home', moduleId: 'todo/index', nav: true, title: 'Todo List' }, { route: ['account/signin'], name: 'accountSignin', moduleId: 'account/signin', title: 'Sign in' }, { route: ['account/signup'], name: 'accountSignup', moduleId: 'account/signup', title: 'Sign up' }, {
              route: ['account', 'account/index'],
              name: 'accountIndex',
              moduleId: 'account/index',
              title: 'Account',
              auth: true
            }, {
              route: ['account/edit/email'],
              name: 'accountEditEmail',
              moduleId: 'account/edit_email',
              title: 'Edit email',
              auth: true
            }, {
              route: ['account/edit/password'],
              name: 'accountEditPassword',
              moduleId: 'account/edit_password',
              title: 'Edit password',
              auth: true
            }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);

      AuthorizeStep = (function () {
        function AuthorizeStep(authManager, config) {
          _classCallCheck(this, _AuthorizeStep);

          this.authManager = authManager;
          this.fbConfig = config;
        }

        _createClass(AuthorizeStep, [{
          key: 'run',
          value: function run(navigationInstruction, next) {
            if (navigationInstruction.getAllInstructions().some(function (i) {
              return i.config.auth;
            })) {
              if (!this.authManager || !this.authManager.currentUser || !this.authManager.currentUser.isAuthenticated) {
                return next.cancel(new Redirect(this.fbConfig.getLoginRoute()));
              }
            }
            return next();
          }
        }]);

        var _AuthorizeStep = AuthorizeStep;
        AuthorizeStep = inject(AuthenticationManager, Configuration)(AuthorizeStep) || AuthorizeStep;
        return AuthorizeStep;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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YSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ25wcm9ncmVzcyc7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbk1hbmFnZXIsIENvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XHJcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSBvbiBGaXJlJztcclxuICAgIGNvbmZpZy5hZGRQaXBlbGluZVN0ZXAoJ2F1dGhvcml6ZScsIEF1dGhvcml6ZVN0ZXApO1xyXG4gICAgY29uZmlnLm1hcChbXHJcbiAgICAgIHtyb3V0ZTogWycnLCAndG9kbyddLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOiAndG9kby9pbmRleCcsIG5hdjogdHJ1ZSwgdGl0bGU6ICdUb2RvIExpc3QnfSxcclxuICAgICAge3JvdXRlOiBbJ2FjY291bnQvc2lnbmluJ10sIG5hbWU6ICdhY2NvdW50U2lnbmluJywgbW9kdWxlSWQ6ICdhY2NvdW50L3NpZ25pbicsIHRpdGxlOiAnU2lnbiBpbid9LFxyXG4gICAgICB7cm91dGU6IFsnYWNjb3VudC9zaWdudXAnXSwgbmFtZTogJ2FjY291bnRTaWdudXAnLCBtb2R1bGVJZDogJ2FjY291bnQvc2lnbnVwJywgdGl0bGU6ICdTaWduIHVwJ30sXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZTogWydhY2NvdW50JywgJ2FjY291bnQvaW5kZXgnXSxcclxuICAgICAgICBuYW1lOiAnYWNjb3VudEluZGV4JyxcclxuICAgICAgICBtb2R1bGVJZDogJ2FjY291bnQvaW5kZXgnLFxyXG4gICAgICAgIHRpdGxlOiAnQWNjb3VudCcsXHJcbiAgICAgICAgYXV0aDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGU6IFsnYWNjb3VudC9lZGl0L2VtYWlsJ10sXHJcbiAgICAgICAgbmFtZTogJ2FjY291bnRFZGl0RW1haWwnLFxyXG4gICAgICAgIG1vZHVsZUlkOiAnYWNjb3VudC9lZGl0X2VtYWlsJyxcclxuICAgICAgICB0aXRsZTogJ0VkaXQgZW1haWwnLFxyXG4gICAgICAgIGF1dGg6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlOiBbJ2FjY291bnQvZWRpdC9wYXNzd29yZCddLFxyXG4gICAgICAgIG5hbWU6ICdhY2NvdW50RWRpdFBhc3N3b3JkJyxcclxuICAgICAgICBtb2R1bGVJZDogJ2FjY291bnQvZWRpdF9wYXNzd29yZCcsXHJcbiAgICAgICAgdGl0bGU6ICdFZGl0IHBhc3N3b3JkJyxcclxuICAgICAgICBhdXRoOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIF0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxufVxyXG5cclxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIsIENvbmZpZ3VyYXRpb24pIGNsYXNzIEF1dGhvcml6ZVN0ZXAge1xyXG4gIGNvbnN0cnVjdG9yKGF1dGhNYW5hZ2VyOkF1dGhlbnRpY2F0aW9uTWFuYWdlciwgY29uZmlnOkZpcmViYXNlQ29uZmlnKSB7XHJcbiAgICB0aGlzLmF1dGhNYW5hZ2VyID0gYXV0aE1hbmFnZXI7XHJcbiAgICB0aGlzLmZiQ29uZmlnID0gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcnVuKG5hdmlnYXRpb25JbnN0cnVjdGlvbiwgbmV4dCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJvdXRlIGhhcyBhbiBcImF1dGhcIiBrZXlcclxuICAgIC8vIFRoZW4gY2hlY2sgaWYgdGhlIGN1cnJlbnQgYXV0aGVudGljYXRlZCB1c2VyIGlzIHZhbGlkXHJcbiAgICBpZiAobmF2aWdhdGlvbkluc3RydWN0aW9uLmdldEFsbEluc3RydWN0aW9ucygpLnNvbWUoaSA9PiBpLmNvbmZpZy5hdXRoKSkge1xyXG4gICAgICBpZiAoIXRoaXMuYXV0aE1hbmFnZXIgfHwgIXRoaXMuYXV0aE1hbmFnZXIuY3VycmVudFVzZXIgfHwgIXRoaXMuYXV0aE1hbmFnZXIuY3VycmVudFVzZXIuaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHQuY2FuY2VsKG5ldyBSZWRpcmVjdCh0aGlzLmZiQ29uZmlnLmdldExvZ2luUm91dGUoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
