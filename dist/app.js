System.register(['bootstrap', 'nprogress', 'aurelia-framework', 'aurelia-router', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, Redirect, AuthenticationManager, Configuration, App, AuthorizeStep;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_nprogress) {}, function (_aureliaFramework) {
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
            config.title = 'Aurelia Firebase';
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
          value: function run(routingContext, next) {
            if (routingContext.nextInstructions.some(function (i) {
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
//# sourceMappingURL=data:application/json;base64,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OiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ25wcm9ncmVzcyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbk1hbmFnZXIsIENvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEgRmlyZWJhc2UnO1xuICAgIGNvbmZpZy5hZGRQaXBlbGluZVN0ZXAoJ2F1dGhvcml6ZScsIEF1dGhvcml6ZVN0ZXApO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAge3JvdXRlOiBbJycsICd0b2RvJ10sIG5hbWU6ICdob21lJywgbW9kdWxlSWQ6ICd0b2RvL2luZGV4JywgbmF2OiB0cnVlLCB0aXRsZTogJ1RvZG8gTGlzdCd9LFxuICAgICAge3JvdXRlOiBbJ2FjY291bnQvc2lnbmluJ10sIG5hbWU6ICdhY2NvdW50U2lnbmluJywgbW9kdWxlSWQ6ICdhY2NvdW50L3NpZ25pbicsIHRpdGxlOiAnU2lnbiBpbid9LFxuICAgICAge3JvdXRlOiBbJ2FjY291bnQvc2lnbnVwJ10sIG5hbWU6ICdhY2NvdW50U2lnbnVwJywgbW9kdWxlSWQ6ICdhY2NvdW50L3NpZ251cCcsIHRpdGxlOiAnU2lnbiB1cCd9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogWydhY2NvdW50JywgJ2FjY291bnQvaW5kZXgnXSxcbiAgICAgICAgbmFtZTogJ2FjY291bnRJbmRleCcsXG4gICAgICAgIG1vZHVsZUlkOiAnYWNjb3VudC9pbmRleCcsXG4gICAgICAgIHRpdGxlOiAnQWNjb3VudCcsXG4gICAgICAgIGF1dGg6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiBbJ2FjY291bnQvZWRpdC9lbWFpbCddLFxuICAgICAgICBuYW1lOiAnYWNjb3VudEVkaXRFbWFpbCcsXG4gICAgICAgIG1vZHVsZUlkOiAnYWNjb3VudC9lZGl0X2VtYWlsJyxcbiAgICAgICAgdGl0bGU6ICdFZGl0IGVtYWlsJyxcbiAgICAgICAgYXV0aDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6IFsnYWNjb3VudC9lZGl0L3Bhc3N3b3JkJ10sXG4gICAgICAgIG5hbWU6ICdhY2NvdW50RWRpdFBhc3N3b3JkJyxcbiAgICAgICAgbW9kdWxlSWQ6ICdhY2NvdW50L2VkaXRfcGFzc3dvcmQnLFxuICAgICAgICB0aXRsZTogJ0VkaXQgcGFzc3dvcmQnLFxuICAgICAgICBhdXRoOiB0cnVlXG4gICAgICB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuXG5AaW5qZWN0KEF1dGhlbnRpY2F0aW9uTWFuYWdlciwgQ29uZmlndXJhdGlvbikgY2xhc3MgQXV0aG9yaXplU3RlcCB7XG4gIGNvbnN0cnVjdG9yKGF1dGhNYW5hZ2VyOkF1dGhlbnRpY2F0aW9uTWFuYWdlciwgY29uZmlnOkZpcmViYXNlQ29uZmlnKSB7XG4gICAgdGhpcy5hdXRoTWFuYWdlciA9IGF1dGhNYW5hZ2VyO1xuICAgIHRoaXMuZmJDb25maWcgPSBjb25maWc7XG4gIH1cblxuICBydW4ocm91dGluZ0NvbnRleHQsIG5leHQpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcm91dGUgaGFzIGFuIFwiYXV0aFwiIGtleVxuICAgIC8vIFRoZW4gY2hlY2sgaWYgdGhlIGN1cnJlbnQgYXV0aGVudGljYXRlZCB1c2VyIGlzIHZhbGlkXG4gICAgaWYgKHJvdXRpbmdDb250ZXh0Lm5leHRJbnN0cnVjdGlvbnMuc29tZShpID0+IGkuY29uZmlnLmF1dGgpKSB7XG4gICAgICBpZiAoIXRoaXMuYXV0aE1hbmFnZXIgfHwgIXRoaXMuYXV0aE1hbmFnZXIuY3VycmVudFVzZXIgfHwgIXRoaXMuYXV0aE1hbmFnZXIuY3VycmVudFVzZXIuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0LmNhbmNlbChuZXcgUmVkaXJlY3QodGhpcy5mYkNvbmZpZy5nZXRMb2dpblJvdXRlKCkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
