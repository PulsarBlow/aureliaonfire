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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvc2lnbnVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FLYSxNQUFNOzs7Ozs7OztpQ0FMWCxNQUFNOzs4QkFDTixNQUFNOzsrQ0FDTixxQkFBcUI7OztBQUdoQixZQUFNO0FBS04saUJBTEEsTUFBTSxDQUtMLFdBQWlDLEVBQUUsTUFBYSxFQUFFOzs7ZUFKOUQsS0FBSyxHQUFHLElBQUk7ZUFDWixRQUFRLEdBQUcsSUFBSTtlQUNmLE9BQU8sR0FBRyxJQUFJOztBQUdaLGNBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO0FBQ25DLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOztxQkFSVSxNQUFNOztpQkFVWCxrQkFBRzs7O0FBQ1AsZ0JBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2hFLElBQUksQ0FBQyxZQUFNO0FBQ1Ysb0JBQUssTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUM3QyxDQUFDLFNBQ0ksQ0FBQyxVQUFDLENBQUMsRUFBSztBQUNaLG9CQUFLLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzFCLENBQUMsQ0FBQztXQUNOOzs7c0JBbEJVLE1BQU07QUFBTixjQUFNLEdBRGxCLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FDekIsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6ImFjY291bnQvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbk1hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xyXG5cclxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIsIFJvdXRlcilcclxuZXhwb3J0IGNsYXNzIFNpZ25VcCB7XHJcbiAgZW1haWwgPSBudWxsO1xyXG4gIHBhc3N3b3JkID0gbnVsbDtcclxuICBtZXNzYWdlID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoYXV0aE1hbmFnZXI6QXV0aGVudGljYXRpb25NYW5hZ2VyLCByb3V0ZXI6Um91dGVyKSB7XHJcbiAgICB0aGlzLmF1cmVsaWFGaXJlYmFzZSA9IGF1dGhNYW5hZ2VyO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgfVxyXG5cclxuICBzaWduVXAoKSB7XHJcbiAgICB0aGlzLmF1cmVsaWFGaXJlYmFzZS5jcmVhdGVVc2VyQW5kU2lnbkluKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ2FjY291bnRJbmRleCcpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlLm1lc3NhZ2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
