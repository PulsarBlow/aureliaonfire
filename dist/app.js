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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OERBTWEsR0FBRyxFQW1Db0MsYUFBYTs7Ozs7Ozs7aUNBdkN6RCxNQUFNOztnQ0FDTixRQUFROzsrQ0FDUixxQkFBcUI7dUNBQUUsYUFBYTs7O0FBRS9CLFNBQUc7aUJBQUgsR0FBRztnQ0FBSCxHQUFHOzs7cUJBQUgsR0FBRzs7aUJBQ0MseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztBQUNqQyxrQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbkQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLEVBQzFGLEVBQUMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLEVBQ2hHLEVBQUMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLEVBQ2hHO0FBQ0UsbUJBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7QUFDbkMsa0JBQUksRUFBRSxjQUFjO0FBQ3BCLHNCQUFRLEVBQUUsZUFBZTtBQUN6QixtQkFBSyxFQUFFLFNBQVM7QUFDaEIsa0JBQUksRUFBRSxJQUFJO2FBQ1gsRUFDRDtBQUNFLG1CQUFLLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztBQUM3QixrQkFBSSxFQUFFLGtCQUFrQjtBQUN4QixzQkFBUSxFQUFFLG9CQUFvQjtBQUM5QixtQkFBSyxFQUFFLFlBQVk7QUFDbkIsa0JBQUksRUFBRSxJQUFJO2FBQ1gsRUFDRDtBQUNFLG1CQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztBQUNoQyxrQkFBSSxFQUFFLHFCQUFxQjtBQUMzQixzQkFBUSxFQUFFLHVCQUF1QjtBQUNqQyxtQkFBSyxFQUFFLGVBQWU7QUFDdEIsa0JBQUksRUFBRSxJQUFJO2FBQ1gsQ0FDRixDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFoQ1UsR0FBRzs7Ozs7QUFtQ29DLG1CQUFhO0FBQ3BELGlCQUR1QyxhQUFhLENBQ25ELFdBQWlDLEVBQUUsTUFBcUIsRUFBRTs7O0FBQ3BFLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3hCOztxQkFKaUQsYUFBYTs7aUJBTTVELGFBQUMsY0FBYyxFQUFFLElBQUksRUFBRTtBQUd4QixnQkFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztxQkFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUk7YUFBQSxDQUFDLEVBQUU7QUFDNUQsa0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7QUFDdkcsdUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztlQUNqRTthQUNGO0FBQ0QsbUJBQU8sSUFBSSxFQUFFLENBQUM7V0FDZjs7OzZCQWZpRCxhQUFhO0FBQWIscUJBQWEsR0FBaEUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyxDQUFPLGFBQWEsS0FBYixhQUFhO2VBQWIsYUFBYSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ25wcm9ncmVzcyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbk1hbmFnZXIsIENvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEgb24gRmlyZSc7XG4gICAgY29uZmlnLmFkZFBpcGVsaW5lU3RlcCgnYXV0aG9yaXplJywgQXV0aG9yaXplU3RlcCk7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7cm91dGU6IFsnJywgJ3RvZG8nXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ3RvZG8vaW5kZXgnLCBuYXY6IHRydWUsIHRpdGxlOiAnVG9kbyBMaXN0J30sXG4gICAgICB7cm91dGU6IFsnYWNjb3VudC9zaWduaW4nXSwgbmFtZTogJ2FjY291bnRTaWduaW4nLCBtb2R1bGVJZDogJ2FjY291bnQvc2lnbmluJywgdGl0bGU6ICdTaWduIGluJ30sXG4gICAgICB7cm91dGU6IFsnYWNjb3VudC9zaWdudXAnXSwgbmFtZTogJ2FjY291bnRTaWdudXAnLCBtb2R1bGVJZDogJ2FjY291bnQvc2lnbnVwJywgdGl0bGU6ICdTaWduIHVwJ30sXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiBbJ2FjY291bnQnLCAnYWNjb3VudC9pbmRleCddLFxuICAgICAgICBuYW1lOiAnYWNjb3VudEluZGV4JyxcbiAgICAgICAgbW9kdWxlSWQ6ICdhY2NvdW50L2luZGV4JyxcbiAgICAgICAgdGl0bGU6ICdBY2NvdW50JyxcbiAgICAgICAgYXV0aDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6IFsnYWNjb3VudC9lZGl0L2VtYWlsJ10sXG4gICAgICAgIG5hbWU6ICdhY2NvdW50RWRpdEVtYWlsJyxcbiAgICAgICAgbW9kdWxlSWQ6ICdhY2NvdW50L2VkaXRfZW1haWwnLFxuICAgICAgICB0aXRsZTogJ0VkaXQgZW1haWwnLFxuICAgICAgICBhdXRoOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogWydhY2NvdW50L2VkaXQvcGFzc3dvcmQnXSxcbiAgICAgICAgbmFtZTogJ2FjY291bnRFZGl0UGFzc3dvcmQnLFxuICAgICAgICBtb2R1bGVJZDogJ2FjY291bnQvZWRpdF9wYXNzd29yZCcsXG4gICAgICAgIHRpdGxlOiAnRWRpdCBwYXNzd29yZCcsXG4gICAgICAgIGF1dGg6IHRydWVcbiAgICAgIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG5cbkBpbmplY3QoQXV0aGVudGljYXRpb25NYW5hZ2VyLCBDb25maWd1cmF0aW9uKSBjbGFzcyBBdXRob3JpemVTdGVwIHtcbiAgY29uc3RydWN0b3IoYXV0aE1hbmFnZXI6QXV0aGVudGljYXRpb25NYW5hZ2VyLCBjb25maWc6RmlyZWJhc2VDb25maWcpIHtcbiAgICB0aGlzLmF1dGhNYW5hZ2VyID0gYXV0aE1hbmFnZXI7XG4gICAgdGhpcy5mYkNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHJ1bihyb3V0aW5nQ29udGV4dCwgbmV4dCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSByb3V0ZSBoYXMgYW4gXCJhdXRoXCIga2V5XG4gICAgLy8gVGhlbiBjaGVjayBpZiB0aGUgY3VycmVudCBhdXRoZW50aWNhdGVkIHVzZXIgaXMgdmFsaWRcbiAgICBpZiAocm91dGluZ0NvbnRleHQubmV4dEluc3RydWN0aW9ucy5zb21lKGkgPT4gaS5jb25maWcuYXV0aCkpIHtcbiAgICAgIGlmICghdGhpcy5hdXRoTWFuYWdlciB8fCAhdGhpcy5hdXRoTWFuYWdlci5jdXJyZW50VXNlciB8fCAhdGhpcy5hdXRoTWFuYWdlci5jdXJyZW50VXNlci5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG5leHQuY2FuY2VsKG5ldyBSZWRpcmVjdCh0aGlzLmZiQ29uZmlnLmdldExvZ2luUm91dGUoKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
