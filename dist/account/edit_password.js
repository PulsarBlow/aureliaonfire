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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvZWRpdF9wYXNzd29yZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUNBSWEsbUJBQW1COzs7Ozs7OztpQ0FKeEIsTUFBTTs7K0NBQ04scUJBQXFCOzs7QUFHaEIseUJBQW1CO0FBUW5CLGlCQVJBLG1CQUFtQixDQVFsQixXQUFXLEVBQUU7OztlQVB6QixXQUFXLEdBQUcsSUFBSTtlQUNsQixXQUFXLEdBQUcsSUFBSTtlQUNsQixXQUFXLEdBQUcsSUFBSTtlQUNsQixrQkFBa0IsR0FBRyxJQUFJO2VBQ3pCLE9BQU8sR0FBRyxJQUFJO2VBQ2QsS0FBSyxHQUFHLElBQUk7O0FBR1YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDaEM7O3FCQVZVLG1CQUFtQjs7aUJBWTFCLGdCQUFHOzs7QUFDTCxnQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDckIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsMEJBQTBCLENBQUM7QUFDeEMscUJBQU87YUFDUjs7QUFFRCxnQkFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNoRCxrQkFBSSxDQUFDLEtBQUssR0FBRyxvQ0FBb0MsQ0FBQztBQUNsRCxrQkFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUMvQixxQkFBTzthQUNSOztBQUVELGdCQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNyQixrQkFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQztBQUN4QyxxQkFBTzthQUNSOztBQUVELGdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixnQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsZ0JBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNqSCxvQkFBSyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7YUFDcEMsRUFBRSxVQUFDLEtBQUssRUFBSztBQUNaLG9CQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNaLG9CQUFLLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsb0JBQUssV0FBVyxHQUFHLElBQUksQ0FBQztBQUN4QixvQkFBSyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7YUFDaEMsQ0FBQyxDQUFDO1dBQ0o7OzttQ0F4Q1UsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUQvQixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FDakIsbUJBQW1CLEtBQW5CLG1CQUFtQjtlQUFuQixtQkFBbUIiLCJmaWxlIjoiYWNjb3VudC9lZGl0X3Bhc3N3b3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbk1hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xyXG5cclxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50RWRpdFBhc3N3b3JkIHtcclxuICBhdXRoTWFuYWdlciA9IG51bGw7XHJcbiAgb2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gIG5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICBjb25maXJtTmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gIG1lc3NhZ2UgPSBudWxsO1xyXG4gIGVycm9yID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoYXV0aE1hbmFnZXIpIHtcclxuICAgIHRoaXMuYXV0aE1hbmFnZXIgPSBhdXRoTWFuYWdlcjtcclxuICB9XHJcblxyXG4gIGVkaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMubmV3UGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5lcnJvciA9ICdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubmV3UGFzc3dvcmQgIT09IHRoaXMuY29uZmlybU5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSAnUGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIGRpZmZlcmVudCc7XHJcbiAgICAgIHRoaXMuY29uZmlybU5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vbGRQYXNzd29yZCkge1xyXG4gICAgICB0aGlzLmVycm9yID0gJ09sZCBwYXNzd29yZCBpcyByZXF1aXJlZCc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVycm9yID0gbnVsbDtcclxuICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XHJcbiAgICB0aGlzLmF1dGhNYW5hZ2VyLmNoYW5nZVBhc3N3b3JkKHRoaXMuYXV0aE1hbmFnZXIuY3VycmVudFVzZXIuZW1haWwsIHRoaXMub2xkUGFzc3dvcmQsIHRoaXMubmV3UGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnUGFzc3dvcmQgY2hhbmdlZCEnO1xyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICB0aGlzLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICAgdGhpcy5jb25maXJtTmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
