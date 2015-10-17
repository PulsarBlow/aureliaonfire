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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvc2lnbmluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FLYSxNQUFNOzs7Ozs7OztpQ0FMWCxNQUFNOzs4QkFDTixNQUFNOzsrQ0FDTixxQkFBcUI7OztBQUdoQixZQUFNO0FBS04saUJBTEEsTUFBTSxDQUtMLFdBQWlDLEVBQUUsTUFBYSxFQUFFOzs7ZUFKOUQsS0FBSyxHQUFHLElBQUk7ZUFDWixRQUFRLEdBQUcsSUFBSTtlQUNmLE9BQU8sR0FBRyxJQUFJOztBQUdaLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCOztxQkFSVSxNQUFNOztpQkFVWCxrQkFBRzs7O0FBQ1AsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGdCQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDL0MsSUFBSSxDQUFDLFlBQU07QUFDVixvQkFBSyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzdDLENBQUMsU0FDSSxDQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQ1osb0JBQUssT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDMUIsQ0FBQyxDQUFDO1dBQ047OztzQkFuQlUsTUFBTTtBQUFOLGNBQU0sR0FEbEIsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUN6QixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiYWNjb3VudC9zaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25NYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZpcmViYXNlJztcblxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBTaWduSW4ge1xuICBlbWFpbCA9IG51bGw7XG4gIHBhc3N3b3JkID0gbnVsbDtcbiAgbWVzc2FnZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXV0aE1hbmFnZXI6QXV0aGVudGljYXRpb25NYW5hZ2VyLCByb3V0ZXI6Um91dGVyKSB7XG4gICAgdGhpcy5hdXRoTWFuYWdlciA9IGF1dGhNYW5hZ2VyO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbiAgc2lnbkluKCkge1xuICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgdGhpcy5hdXRoTWFuYWdlci5zaWduSW4odGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKCdhY2NvdW50SW5kZXgnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
