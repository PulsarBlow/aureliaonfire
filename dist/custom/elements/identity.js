System.register(['aurelia-framework', 'aurelia-router', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, customElement, Router, AuthenticationManager, User, Identity;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFirebase) {
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
      User = _aureliaFirebase.User;
    }],
    execute: function () {
      Identity = (function () {
        function Identity(authManager, router) {
          _classCallCheck(this, _Identity);

          this.authManager = authManager;

          this.user = authManager.currentUser;
          this.router = router;
        }

        _createClass(Identity, [{
          key: 'signOut',
          value: function signOut() {
            var _this = this;

            this.authManager.signOut().then(function () {
              _this.router.navigateToRoute('home');
            });
          }
        }]);

        var _Identity = Identity;
        Identity = inject(AuthenticationManager, Router)(Identity) || Identity;
        Identity = customElement('identity')(Identity) || Identity;
        return Identity;
      })();

      _export('Identity', Identity);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS9lbGVtZW50cy9pZGVudGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0VBTWEsUUFBUTs7Ozs7Ozs7aUNBTmIsTUFBTTt3Q0FBRSxhQUFhOzs4QkFDckIsTUFBTTs7K0NBQ04scUJBQXFCOzhCQUFFLElBQUk7OztBQUl0QixjQUFRO0FBRVIsaUJBRkEsUUFBUSxDQUVQLFdBQWtDLEVBQUUsTUFBYyxFQUFFOzs7QUFDOUQsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7O0FBRS9CLGNBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7cUJBUFUsUUFBUTs7aUJBU1osbUJBQUc7OztBQUNSLGdCQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ3BDLG9CQUFLLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckMsQ0FBQyxDQUFDO1dBQ0o7Ozt3QkFiVSxRQUFRO0FBQVIsZ0JBQVEsR0FEcEIsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUN6QixRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBRnBCLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FFYixRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVEiLCJmaWxlIjoiY3VzdG9tL2VsZW1lbnRzL2lkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbk1hbmFnZXIsIFVzZXJ9IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ2lkZW50aXR5JylcclxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIsIFJvdXRlcilcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoYXV0aE1hbmFnZXI6IEF1dGhlbnRpY2F0aW9uTWFuYWdlciwgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuYXV0aE1hbmFnZXIgPSBhdXRoTWFuYWdlcjtcclxuICAgIC8qZXNsaW50IG5vLXVudXNlZC12YXJzOjAqL1xyXG4gICAgdGhpcy51c2VyID0gYXV0aE1hbmFnZXIuY3VycmVudFVzZXI7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcblxyXG4gIHNpZ25PdXQoKSB7XHJcbiAgICB0aGlzLmF1dGhNYW5hZ2VyLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKCdob21lJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
