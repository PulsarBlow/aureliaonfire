System.register(['aurelia-framework', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, AuthenticationManager, AccountEditEmail;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFirebase) {
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
    }],
    execute: function () {
      AccountEditEmail = (function () {
        function AccountEditEmail(authManager) {
          _classCallCheck(this, _AccountEditEmail);

          this.authManager = null;
          this.newEmail = null;
          this.password = null;
          this.message = null;
          this.error = null;

          this.authManager = authManager;
        }

        _createClass(AccountEditEmail, [{
          key: 'edit',
          value: function edit() {
            var _this = this;

            if (!this.newEmail) {
              this.error = 'New email is required';
              return;
            }
            if (!this.password) {
              this.error = 'Password is required';
              return;
            }

            this.error = null;
            this.message = null;
            this.authManager.changeEmail(this.authManager.currentUser.email, this.password, this.newEmail).then(function () {
              _this.authManager.currentUser.email = _this.newEmail;
              _this.message = 'Email changed!';
            }, function (error) {
              _this.error = error.message;
            }).then(function () {
              _this.newEmail = null;
              _this.password = null;
            });
          }
        }]);

        var _AccountEditEmail = AccountEditEmail;
        AccountEditEmail = inject(AuthenticationManager)(AccountEditEmail) || AccountEditEmail;
        return AccountEditEmail;
      })();

      _export('AccountEditEmail', AccountEditEmail);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvZWRpdF9lbWFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUNBSWEsZ0JBQWdCOzs7Ozs7OztpQ0FKckIsTUFBTTs7K0NBQ04scUJBQXFCOzs7QUFHaEIsc0JBQWdCO0FBT2hCLGlCQVBBLGdCQUFnQixDQU9mLFdBQVcsRUFBRTs7O2VBTnpCLFdBQVcsR0FBRyxJQUFJO2VBQ2xCLFFBQVEsR0FBRyxJQUFJO2VBQ2YsUUFBUSxHQUFHLElBQUk7ZUFDZixPQUFPLEdBQUcsSUFBSTtlQUNkLEtBQUssR0FBRyxJQUFJOztBQUdWLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ2hDOztxQkFUVSxnQkFBZ0I7O2lCQVd2QixnQkFBRzs7O0FBQ0wsZ0JBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2xCLGtCQUFJLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO0FBQ3JDLHFCQUFPO2FBQ1I7QUFDRCxnQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDbEIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7QUFDcEMscUJBQU87YUFDUjs7QUFFRCxnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGdCQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDeEcsb0JBQUssV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBSyxRQUFRLENBQUM7QUFDbkQsb0JBQUssT0FBTyxHQUFHLGdCQUFnQixDQUFDO2FBQ2pDLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDWixvQkFBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDWixvQkFBSyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLG9CQUFLLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEIsQ0FBQyxDQUFDO1dBQ0o7OztnQ0FoQ1UsZ0JBQWdCO0FBQWhCLHdCQUFnQixHQUQ1QixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FDakIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtlQUFoQixnQkFBZ0IiLCJmaWxlIjoiYWNjb3VudC9lZGl0X2VtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25NYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZpcmViYXNlJztcblxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIpXG5leHBvcnQgY2xhc3MgQWNjb3VudEVkaXRFbWFpbCB7XG4gIGF1dGhNYW5hZ2VyID0gbnVsbDtcbiAgbmV3RW1haWwgPSBudWxsO1xuICBwYXNzd29yZCA9IG51bGw7XG4gIG1lc3NhZ2UgPSBudWxsO1xuICBlcnJvciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXV0aE1hbmFnZXIpIHtcbiAgICB0aGlzLmF1dGhNYW5hZ2VyID0gYXV0aE1hbmFnZXI7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIGlmICghdGhpcy5uZXdFbWFpbCkge1xuICAgICAgdGhpcy5lcnJvciA9ICdOZXcgZW1haWwgaXMgcmVxdWlyZWQnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgdGhpcy5hdXRoTWFuYWdlci5jaGFuZ2VFbWFpbCh0aGlzLmF1dGhNYW5hZ2VyLmN1cnJlbnRVc2VyLmVtYWlsLCB0aGlzLnBhc3N3b3JkLCB0aGlzLm5ld0VtYWlsKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuYXV0aE1hbmFnZXIuY3VycmVudFVzZXIuZW1haWwgPSB0aGlzLm5ld0VtYWlsO1xuICAgICAgdGhpcy5tZXNzYWdlID0gJ0VtYWlsIGNoYW5nZWQhJztcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5uZXdFbWFpbCA9IG51bGw7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
