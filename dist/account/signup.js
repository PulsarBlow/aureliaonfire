System.register(['aurelia-framework', 'aurelia-router', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, Router, AuthenticationManager, SignUp;

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
      SignUp = (function () {
        function SignUp(authManager, router) {
          _classCallCheck(this, _SignUp);

          this.email = null;
          this.password = null;
          this.message = null;

          this.aureliaFirebase = authManager;
          this.router = router;
        }

        _createClass(SignUp, [{
          key: 'signUp',
          value: function signUp() {
            var _this = this;

            this.aureliaFirebase.createUserAndSignIn(this.email, this.password).then(function () {
              _this.router.navigateToRoute('accountIndex');
            })['catch'](function (e) {
              _this.message = e.message;
            });
          }
        }]);

        var _SignUp = SignUp;
        SignUp = inject(AuthenticationManager, Router)(SignUp) || SignUp;
        return SignUp;
      })();

      _export('SignUp', SignUp);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvc2lnbnVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FLYSxNQUFNOzs7Ozs7OztpQ0FMWCxNQUFNOzs4QkFDTixNQUFNOzsrQ0FDTixxQkFBcUI7OztBQUdoQixZQUFNO0FBS04saUJBTEEsTUFBTSxDQUtMLFdBQWlDLEVBQUUsTUFBYSxFQUFFOzs7ZUFKOUQsS0FBSyxHQUFHLElBQUk7ZUFDWixRQUFRLEdBQUcsSUFBSTtlQUNmLE9BQU8sR0FBRyxJQUFJOztBQUdaLGNBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO0FBQ25DLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOztxQkFSVSxNQUFNOztpQkFVWCxrQkFBRzs7O0FBQ1AsZ0JBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2hFLElBQUksQ0FBQyxZQUFNO0FBQ1Ysb0JBQUssTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUM3QyxDQUFDLFNBQ0ksQ0FBQyxVQUFDLENBQUMsRUFBSztBQUNaLG9CQUFLLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzFCLENBQUMsQ0FBQztXQUNOOzs7c0JBbEJVLE1BQU07QUFBTixjQUFNLEdBRGxCLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FDekIsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6ImFjY291bnQvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1maXJlYmFzZSc7XG5cbkBpbmplY3QoQXV0aGVudGljYXRpb25NYW5hZ2VyLCBSb3V0ZXIpXG5leHBvcnQgY2xhc3MgU2lnblVwIHtcbiAgZW1haWwgPSBudWxsO1xuICBwYXNzd29yZCA9IG51bGw7XG4gIG1lc3NhZ2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGF1dGhNYW5hZ2VyOkF1dGhlbnRpY2F0aW9uTWFuYWdlciwgcm91dGVyOlJvdXRlcikge1xuICAgIHRoaXMuYXVyZWxpYUZpcmViYXNlID0gYXV0aE1hbmFnZXI7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgdGhpcy5hdXJlbGlhRmlyZWJhc2UuY3JlYXRlVXNlckFuZFNpZ25Jbih0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ2FjY291bnRJbmRleCcpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
