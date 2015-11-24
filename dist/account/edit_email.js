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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvZWRpdF9lbWFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUNBSWEsZ0JBQWdCOzs7Ozs7OztpQ0FKckIsTUFBTTs7K0NBQ04scUJBQXFCOzs7QUFHaEIsc0JBQWdCO0FBT2hCLGlCQVBBLGdCQUFnQixDQU9mLFdBQVcsRUFBRTs7O2VBTnpCLFdBQVcsR0FBRyxJQUFJO2VBQ2xCLFFBQVEsR0FBRyxJQUFJO2VBQ2YsUUFBUSxHQUFHLElBQUk7ZUFDZixPQUFPLEdBQUcsSUFBSTtlQUNkLEtBQUssR0FBRyxJQUFJOztBQUdWLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ2hDOztxQkFUVSxnQkFBZ0I7O2lCQVd2QixnQkFBRzs7O0FBQ0wsZ0JBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2xCLGtCQUFJLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO0FBQ3JDLHFCQUFPO2FBQ1I7QUFDRCxnQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDbEIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7QUFDcEMscUJBQU87YUFDUjs7QUFFRCxnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGdCQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDeEcsb0JBQUssV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBSyxRQUFRLENBQUM7QUFDbkQsb0JBQUssT0FBTyxHQUFHLGdCQUFnQixDQUFDO2FBQ2pDLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDWixvQkFBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDWixvQkFBSyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLG9CQUFLLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEIsQ0FBQyxDQUFDO1dBQ0o7OztnQ0FoQ1UsZ0JBQWdCO0FBQWhCLHdCQUFnQixHQUQ1QixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FDakIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtlQUFoQixnQkFBZ0IiLCJmaWxlIjoiYWNjb3VudC9lZGl0X2VtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbk1hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xyXG5cclxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIpXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50RWRpdEVtYWlsIHtcclxuICBhdXRoTWFuYWdlciA9IG51bGw7XHJcbiAgbmV3RW1haWwgPSBudWxsO1xyXG4gIHBhc3N3b3JkID0gbnVsbDtcclxuICBtZXNzYWdlID0gbnVsbDtcclxuICBlcnJvciA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF1dGhNYW5hZ2VyKSB7XHJcbiAgICB0aGlzLmF1dGhNYW5hZ2VyID0gYXV0aE1hbmFnZXI7XHJcbiAgfVxyXG5cclxuICBlZGl0KCkge1xyXG4gICAgaWYgKCF0aGlzLm5ld0VtYWlsKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSAnTmV3IGVtYWlsIGlzIHJlcXVpcmVkJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBhc3N3b3JkKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lcnJvciA9IG51bGw7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xyXG4gICAgdGhpcy5hdXRoTWFuYWdlci5jaGFuZ2VFbWFpbCh0aGlzLmF1dGhNYW5hZ2VyLmN1cnJlbnRVc2VyLmVtYWlsLCB0aGlzLnBhc3N3b3JkLCB0aGlzLm5ld0VtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5hdXRoTWFuYWdlci5jdXJyZW50VXNlci5lbWFpbCA9IHRoaXMubmV3RW1haWw7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9ICdFbWFpbCBjaGFuZ2VkISc7XHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgdGhpcy5lcnJvciA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5uZXdFbWFpbCA9IG51bGw7XHJcbiAgICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
