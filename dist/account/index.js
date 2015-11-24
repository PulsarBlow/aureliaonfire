System.register(['aurelia-framework', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, AuthenticationManager, Account;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFirebase) {
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
    }],
    execute: function () {
      Account = (function () {
        function Account(authManager) {
          _classCallCheck(this, _Account);

          this.newEmail = null;
          this.newPassword = null;
          this.password = null;

          this.authManager = authManager;
        }

        _createClass(Account, [{
          key: 'update',
          value: function update() {}
        }]);

        var _Account = Account;
        Account = inject(AuthenticationManager)(Account) || Account;
        return Account;
      })();

      _export('Account', Account);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FDQUlhLE9BQU87Ozs7Ozs7O2lDQUpaLE1BQU07OytDQUNOLHFCQUFxQjs7O0FBR2hCLGFBQU87QUFNUCxpQkFOQSxPQUFPLENBTU4sV0FBa0MsRUFBRTs7O2VBSmhELFFBQVEsR0FBRyxJQUFJO2VBQ2YsV0FBVyxHQUFJLElBQUk7ZUFDbkIsUUFBUSxHQUFHLElBQUk7O0FBR2IsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDaEM7O3FCQVJVLE9BQU87O2lCQVVaLGtCQUFHLEVBRVI7Ozt1QkFaVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FDakIsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPIiwiZmlsZSI6ImFjY291bnQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1maXJlYmFzZSc7XHJcblxyXG5AaW5qZWN0KEF1dGhlbnRpY2F0aW9uTWFuYWdlcilcclxuZXhwb3J0IGNsYXNzIEFjY291bnQge1xyXG5cclxuICBuZXdFbWFpbCA9IG51bGw7XHJcbiAgbmV3UGFzc3dvcmQgPSAgbnVsbDtcclxuICBwYXNzd29yZCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF1dGhNYW5hZ2VyOiBBdXRoZW50aWNhdGlvbk1hbmFnZXIpIHtcclxuICAgIHRoaXMuYXV0aE1hbmFnZXIgPSBhdXRoTWFuYWdlcjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
