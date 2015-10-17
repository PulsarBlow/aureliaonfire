System.register(['moment', 'aurelia-framework', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, ReactiveCollection, AuthenticationManager, TodoCollection;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_moment) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFirebase) {
      ReactiveCollection = _aureliaFirebase.ReactiveCollection;
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
    }],
    execute: function () {
      TodoCollection = (function (_ReactiveCollection) {
        _inherits(TodoCollection, _ReactiveCollection);

        function TodoCollection(authManager) {
          _classCallCheck(this, _TodoCollection);

          _get(Object.getPrototypeOf(_TodoCollection.prototype), 'constructor', this).call(this, 'todos');
          this._user = null;
          this._user = authManager.currentUser;
        }

        _createClass(TodoCollection, [{
          key: 'add',
          value: function add(text) {
            if (!this._user || !this._user.isAuthenticated) {
              return Promise.reject({ message: 'Authentication is required' });
            }
            if (!text) {
              return Promise.reject({ message: 'A Todo message is required' });
            }

            return _get(Object.getPrototypeOf(_TodoCollection.prototype), 'add', this).call(this, {
              ownerId: this._user.uid,
              ownerProfileImageUrl: this._user.profileImageUrl,
              text: text,
              timestamp: moment().utc().unix(),
              isCompleted: false
            });
          }
        }]);

        var _TodoCollection = TodoCollection;
        TodoCollection = inject(AuthenticationManager)(TodoCollection) || TodoCollection;
        return TodoCollection;
      })(ReactiveCollection);

      _export('TodoCollection', TodoCollection);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3RvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lEQUthLGNBQWM7Ozs7Ozs7Ozs7OztpQ0FKbkIsTUFBTTs7NENBQ04sa0JBQWtCOytDQUFFLHFCQUFxQjs7O0FBR3BDLG9CQUFjO2tCQUFkLGNBQWM7O0FBR2QsaUJBSEEsY0FBYyxDQUdiLFdBQWlDLEVBQUU7OztBQUM3QyxpR0FBTSxPQUFPLEVBQUU7ZUFIakIsS0FBSyxHQUFHLElBQUk7QUFJVixjQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7U0FDdEM7O3FCQU5VLGNBQWM7O2lCQVF0QixhQUFDLElBQVcsRUFBRTtBQUNmLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO0FBQzlDLHFCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQyxDQUFDO2FBQ2hFO0FBQ0QsZ0JBQUksQ0FBQyxJQUFJLEVBQUU7QUFDVCxxQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQzthQUNoRTs7QUFFRCxrR0FBaUI7QUFDZixxQkFBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztBQUN2QixrQ0FBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7QUFDaEQsa0JBQUksRUFBRSxJQUFJO0FBQ1YsdUJBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDaEMseUJBQVcsRUFBRSxLQUFLO2FBQ25CLEVBQUU7V0FDSjs7OzhCQXZCVSxjQUFjO0FBQWQsc0JBQWMsR0FEMUIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQ2pCLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYztTQUFTLGtCQUFrQiIsImZpbGUiOiJjb2xsZWN0aW9ucy90b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdtb21lbnQnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7UmVhY3RpdmVDb2xsZWN0aW9uLCBBdXRoZW50aWNhdGlvbk1hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xuXG5AaW5qZWN0KEF1dGhlbnRpY2F0aW9uTWFuYWdlcilcbmV4cG9ydCBjbGFzcyBUb2RvQ29sbGVjdGlvbiBleHRlbmRzIFJlYWN0aXZlQ29sbGVjdGlvbiB7XG4gIF91c2VyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhdXRoTWFuYWdlcjpBdXRoZW50aWNhdGlvbk1hbmFnZXIpIHtcbiAgICBzdXBlcigndG9kb3MnKTtcbiAgICB0aGlzLl91c2VyID0gYXV0aE1hbmFnZXIuY3VycmVudFVzZXI7XG4gIH1cblxuICBhZGQodGV4dDpTdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX3VzZXIgfHwgIXRoaXMuX3VzZXIuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe21lc3NhZ2U6ICdBdXRoZW50aWNhdGlvbiBpcyByZXF1aXJlZCd9KTtcbiAgICB9XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe21lc3NhZ2U6ICdBIFRvZG8gbWVzc2FnZSBpcyByZXF1aXJlZCd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuYWRkKHtcbiAgICAgIG93bmVySWQ6IHRoaXMuX3VzZXIudWlkLFxuICAgICAgb3duZXJQcm9maWxlSW1hZ2VVcmw6IHRoaXMuX3VzZXIucHJvZmlsZUltYWdlVXJsLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHRpbWVzdGFtcDogbW9tZW50KCkudXRjKCkudW5peCgpLFxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
