System.register(['aurelia-framework', 'aurelia-router', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, Router, AuthenticationManager, SignIn;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFirebase) {
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
    }],
    execute: function () {
      SignIn = (function () {
        function SignIn(authManager, router) {
          _classCallCheck(this, _SignIn);

          this.email = null;
          this.password = null;
          this.message = null;

          this.authManager = authManager;
          this.router = router;
        }

        _createClass(SignIn, [{
          key: 'signIn',
          value: function signIn() {
            var _this = this;

            this.message = null;
            this.authManager.signIn(this.email, this.password).then(function () {
              _this.router.navigateToRoute('accountIndex');
            })['catch'](function (e) {
              _this.message = e.message;
            });
          }
        }]);

        var _SignIn = SignIn;
        SignIn = inject(AuthenticationManager, Router)(SignIn) || SignIn;
        return SignIn;
      })();

      _export('SignIn', SignIn);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvc2lnbmluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FLYSxNQUFNOzs7Ozs7OztpQ0FMWCxNQUFNOzs4QkFDTixNQUFNOzsrQ0FDTixxQkFBcUI7OztBQUdoQixZQUFNO0FBS04saUJBTEEsTUFBTSxDQUtMLFdBQWlDLEVBQUUsTUFBYSxFQUFFOzs7ZUFKOUQsS0FBSyxHQUFHLElBQUk7ZUFDWixRQUFRLEdBQUcsSUFBSTtlQUNmLE9BQU8sR0FBRyxJQUFJOztBQUdaLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOztxQkFSVSxNQUFNOztpQkFVWCxrQkFBRzs7O0FBQ1AsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGdCQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDL0MsSUFBSSxDQUFDLFlBQU07QUFDVixvQkFBSyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzdDLENBQUMsU0FDSSxDQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQ1osb0JBQUssT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDMUIsQ0FBQyxDQUFDO1dBQ047OztzQkFuQlUsTUFBTTtBQUFOLGNBQU0sR0FEbEIsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUN6QixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiYWNjb3VudC9zaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1maXJlYmFzZSc7XHJcblxyXG5AaW5qZWN0KEF1dGhlbnRpY2F0aW9uTWFuYWdlciwgUm91dGVyKVxyXG5leHBvcnQgY2xhc3MgU2lnbkluIHtcclxuICBlbWFpbCA9IG51bGw7XHJcbiAgcGFzc3dvcmQgPSBudWxsO1xyXG4gIG1lc3NhZ2UgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhdXRoTWFuYWdlcjpBdXRoZW50aWNhdGlvbk1hbmFnZXIsIHJvdXRlcjpSb3V0ZXIpIHtcclxuICAgIHRoaXMuYXV0aE1hbmFnZXIgPSBhdXRoTWFuYWdlcjtcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxuXHJcbiAgc2lnbkluKCkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcclxuICAgIHRoaXMuYXV0aE1hbmFnZXIuc2lnbkluKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ2FjY291bnRJbmRleCcpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlLm1lc3NhZ2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
