System.register(['aurelia-framework', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, AuthenticationManager, AccountEditPassword;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFirebase) {
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
    }],
    execute: function () {
      AccountEditPassword = (function () {
        function AccountEditPassword(authManager) {
          _classCallCheck(this, _AccountEditPassword);

          this.authManager = null;
          this.oldPassword = null;
          this.newPassword = null;
          this.confirmNewPassword = null;
          this.message = null;
          this.error = null;

          this.authManager = authManager;
        }

        _createClass(AccountEditPassword, [{
          key: 'edit',
          value: function edit() {
            var _this = this;

            if (!this.newPassword) {
              this.error = 'New password is required';
              return;
            }

            if (this.newPassword !== this.confirmNewPassword) {
              this.error = 'Password confirmation is different';
              this.confirmNewPassword = null;
              return;
            }

            if (!this.oldPassword) {
              this.error = 'Old password is required';
              return;
            }

            this.error = null;
            this.message = null;
            this.authManager.changePassword(this.authManager.currentUser.email, this.oldPassword, this.newPassword).then(function () {
              _this.message = 'Password changed!';
            }, function (error) {
              _this.error = error.message;
            }).then(function () {
              _this.oldPassword = null;
              _this.newPassword = null;
              _this.confirmNewPassword = null;
            });
          }
        }]);

        var _AccountEditPassword = AccountEditPassword;
        AccountEditPassword = inject(AuthenticationManager)(AccountEditPassword) || AccountEditPassword;
        return AccountEditPassword;
      })();

      _export('AccountEditPassword', AccountEditPassword);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvZWRpdF9wYXNzd29yZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUNBSWEsbUJBQW1COzs7Ozs7OztpQ0FKeEIsTUFBTTs7K0NBQ04scUJBQXFCOzs7QUFHaEIseUJBQW1CO0FBUW5CLGlCQVJBLG1CQUFtQixDQVFsQixXQUFXLEVBQUU7OztlQVB6QixXQUFXLEdBQUcsSUFBSTtlQUNsQixXQUFXLEdBQUcsSUFBSTtlQUNsQixXQUFXLEdBQUcsSUFBSTtlQUNsQixrQkFBa0IsR0FBRyxJQUFJO2VBQ3pCLE9BQU8sR0FBRyxJQUFJO2VBQ2QsS0FBSyxHQUFHLElBQUk7O0FBR1YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDaEM7O3FCQVZVLG1CQUFtQjs7aUJBWTFCLGdCQUFHOzs7QUFDTCxnQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDckIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsMEJBQTBCLENBQUM7QUFDeEMscUJBQU87YUFDUjs7QUFFRCxnQkFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNoRCxrQkFBSSxDQUFDLEtBQUssR0FBRyxvQ0FBb0MsQ0FBQztBQUNsRCxrQkFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUMvQixxQkFBTzthQUNSOztBQUVELGdCQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNyQixrQkFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQztBQUN4QyxxQkFBTzthQUNSOztBQUVELGdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixnQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsZ0JBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNqSCxvQkFBSyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7YUFDcEMsRUFBRSxVQUFDLEtBQUssRUFBSztBQUNaLG9CQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNaLG9CQUFLLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsb0JBQUssV0FBVyxHQUFHLElBQUksQ0FBQztBQUN4QixvQkFBSyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7YUFDaEMsQ0FBQyxDQUFDO1dBQ0o7OzttQ0F4Q1UsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUQvQixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FDakIsbUJBQW1CLEtBQW5CLG1CQUFtQjtlQUFuQixtQkFBbUIiLCJmaWxlIjoiYWNjb3VudC9lZGl0X3Bhc3N3b3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25NYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZpcmViYXNlJztcblxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIpXG5leHBvcnQgY2xhc3MgQWNjb3VudEVkaXRQYXNzd29yZCB7XG4gIGF1dGhNYW5hZ2VyID0gbnVsbDtcbiAgb2xkUGFzc3dvcmQgPSBudWxsO1xuICBuZXdQYXNzd29yZCA9IG51bGw7XG4gIGNvbmZpcm1OZXdQYXNzd29yZCA9IG51bGw7XG4gIG1lc3NhZ2UgPSBudWxsO1xuICBlcnJvciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXV0aE1hbmFnZXIpIHtcbiAgICB0aGlzLmF1dGhNYW5hZ2VyID0gYXV0aE1hbmFnZXI7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIGlmICghdGhpcy5uZXdQYXNzd29yZCkge1xuICAgICAgdGhpcy5lcnJvciA9ICdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5ld1Bhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1OZXdQYXNzd29yZCkge1xuICAgICAgdGhpcy5lcnJvciA9ICdQYXNzd29yZCBjb25maXJtYXRpb24gaXMgZGlmZmVyZW50JztcbiAgICAgIHRoaXMuY29uZmlybU5ld1Bhc3N3b3JkID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub2xkUGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSAnT2xkIHBhc3N3b3JkIGlzIHJlcXVpcmVkJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgIHRoaXMuYXV0aE1hbmFnZXIuY2hhbmdlUGFzc3dvcmQodGhpcy5hdXRoTWFuYWdlci5jdXJyZW50VXNlci5lbWFpbCwgdGhpcy5vbGRQYXNzd29yZCwgdGhpcy5uZXdQYXNzd29yZCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnUGFzc3dvcmQgY2hhbmdlZCEnO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9sZFBhc3N3b3JkID0gbnVsbDtcbiAgICAgIHRoaXMubmV3UGFzc3dvcmQgPSBudWxsO1xuICAgICAgdGhpcy5jb25maXJtTmV3UGFzc3dvcmQgPSBudWxsO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
