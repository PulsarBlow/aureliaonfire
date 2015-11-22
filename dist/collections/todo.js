System.register(['moment', 'aurelia-framework', 'aurelia-firebase'], function (_export) {
  'use strict';

  var inject, computedFrom, ReactiveCollection, AuthenticationManager, TodoCollection;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_moment) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      computedFrom = _aureliaFramework.computedFrom;
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

        _createDecoratedClass(TodoCollection, [{
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
              timestamp: Math.floor(Date.now() / 1000),
              isCompleted: false
            });
          }
        }, {
          key: 'orderedItems',
          decorators: [computedFrom('items')],
          get: function get() {
            console.log('ordering');
            return this.items.sort(function (item1, item2) {
              if (item1.timestamp < item2.timestamp) {
                return -1;
              }
              if (item2.timestamp > item2.timestamp) {
                return 1;
              }
              return 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3RvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VFQUthLGNBQWM7Ozs7Ozs7Ozs7OztpQ0FKbkIsTUFBTTt1Q0FBRSxZQUFZOzs0Q0FDcEIsa0JBQWtCOytDQUFFLHFCQUFxQjs7O0FBR3BDLG9CQUFjO2tCQUFkLGNBQWM7O0FBR2QsaUJBSEEsY0FBYyxDQUdiLFdBQWlDLEVBQUU7OztBQUM3QyxpR0FBTSxPQUFPLEVBQUU7ZUFIakIsS0FBSyxHQUFHLElBQUk7QUFJVixjQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7U0FDdEM7OzhCQU5VLGNBQWM7O2lCQXFCdEIsYUFBQyxJQUFXLEVBQUU7QUFDZixnQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtBQUM5QyxxQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQzthQUNoRTtBQUNELGdCQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1QscUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSw0QkFBNEIsRUFBQyxDQUFDLENBQUM7YUFDaEU7O0FBRUQsa0dBQWlCO0FBQ2YscUJBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7QUFDdkIsa0NBQW9CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlO0FBQ2hELGtCQUFJLEVBQUUsSUFBSTtBQUNWLHVCQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLHlCQUFXLEVBQUUsS0FBSzthQUNuQixFQUFFO1dBQ0o7Ozt1QkE1QkEsWUFBWSxDQUFDLE9BQU8sQ0FBQztlQUNOLGVBQUc7QUFDakIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEIsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFLO0FBQ3ZDLGtCQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUNwQyx1QkFBTyxDQUFDLENBQUMsQ0FBQztlQUNYO0FBQ0Qsa0JBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ3BDLHVCQUFPLENBQUMsQ0FBQztlQUNWO0FBQ0QscUJBQU8sQ0FBQyxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1dBQ0o7Ozs4QkFwQlUsY0FBYztBQUFkLHNCQUFjLEdBRDFCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUNqQixjQUFjLEtBQWQsY0FBYztlQUFkLGNBQWM7U0FBUyxrQkFBa0IiLCJmaWxlIjoiY29sbGVjdGlvbnMvdG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnbW9tZW50JztcbmltcG9ydCB7aW5qZWN0LCBjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7UmVhY3RpdmVDb2xsZWN0aW9uLCBBdXRoZW50aWNhdGlvbk1hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZmlyZWJhc2UnO1xuXG5AaW5qZWN0KEF1dGhlbnRpY2F0aW9uTWFuYWdlcilcbmV4cG9ydCBjbGFzcyBUb2RvQ29sbGVjdGlvbiBleHRlbmRzIFJlYWN0aXZlQ29sbGVjdGlvbiB7XG4gIF91c2VyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhdXRoTWFuYWdlcjpBdXRoZW50aWNhdGlvbk1hbmFnZXIpIHtcbiAgICBzdXBlcigndG9kb3MnKTtcbiAgICB0aGlzLl91c2VyID0gYXV0aE1hbmFnZXIuY3VycmVudFVzZXI7XG4gIH1cblxuICBAY29tcHV0ZWRGcm9tKCdpdGVtcycpXG4gIGdldCBvcmRlcmVkSXRlbXMoKSB7XG4gICAgY29uc29sZS5sb2coJ29yZGVyaW5nJyk7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiB7XG4gICAgICBpZihpdGVtMS50aW1lc3RhbXAgPCBpdGVtMi50aW1lc3RhbXApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYoaXRlbTIudGltZXN0YW1wID4gaXRlbTIudGltZXN0YW1wKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cbiAgYWRkKHRleHQ6U3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl91c2VyIHx8ICF0aGlzLl91c2VyLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHttZXNzYWdlOiAnQXV0aGVudGljYXRpb24gaXMgcmVxdWlyZWQnfSk7XG4gICAgfVxuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHttZXNzYWdlOiAnQSBUb2RvIG1lc3NhZ2UgaXMgcmVxdWlyZWQnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLmFkZCh7XG4gICAgICBvd25lcklkOiB0aGlzLl91c2VyLnVpZCxcbiAgICAgIG93bmVyUHJvZmlsZUltYWdlVXJsOiB0aGlzLl91c2VyLnByb2ZpbGVJbWFnZVVybCxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICB0aW1lc3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
