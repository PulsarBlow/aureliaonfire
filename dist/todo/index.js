System.register(['aurelia-framework', 'aurelia-firebase', '../collections/todo'], function (_export) {
  'use strict';

  var inject, computedFrom, AuthenticationManager, User, TodoCollection, TodoIndex;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      computedFrom = _aureliaFramework.computedFrom;
    }, function (_aureliaFirebase) {
      AuthenticationManager = _aureliaFirebase.AuthenticationManager;
      User = _aureliaFirebase.User;
    }, function (_collectionsTodo) {
      TodoCollection = _collectionsTodo.TodoCollection;
    }],
    execute: function () {
      TodoIndex = (function () {
        function TodoIndex(authManager, collection) {
          _classCallCheck(this, _TodoIndex);

          this.user = null;
          this.collection = null;
          this.todoText = null;
          this.message = null;
          this.selectedStateFilter = null;
          this.selectedOwnerFilter = null;

          this.user = authManager.currentUser;
          this.collection = collection;
        }

        _createDecoratedClass(TodoIndex, [{
          key: 'add',
          value: function add() {
            var _this = this;

            this.collection.add(this.todoText).then(function () {
              _this.message = null;
              _this.todoText = null;
            })['catch'](function (e) {
              _this.message = e.message;
            });
          }
        }, {
          key: 'fromNow',
          value: function fromNow(timestamp) {
            return moment.unix(timestamp).fromNow();
          }
        }, {
          key: 'filteredItems',
          decorators: [computedFrom('collection.items', 'selectedStateFilter', 'selectedOwnerFilter')],
          get: function get() {
            var _this2 = this;

            var items = this.collection.items;
            if (!this.selectedStateFilter && !this.selectedOwnerFilter) {
              return items;
            }

            if (this.selectedOwnerFilter) {
              items = items.filter(function (item) {
                return item.ownerId === _this2.user.uid;
              }, this);
            }

            if (this.selectedStateFilter) {
              items = items.filter(function (item) {
                return item.isCompleted === (_this2.selectedStateFilter === 'completed');
              }, this);
            }
            return items;
          }
        }]);

        var _TodoIndex = TodoIndex;
        TodoIndex = inject(AuthenticationManager, TodoCollection)(TodoIndex) || TodoIndex;
        return TodoIndex;
      })();

      _export('TodoIndex', TodoIndex);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lFQUthLFNBQVM7Ozs7Ozs7O2lDQUxkLE1BQU07dUNBQUUsWUFBWTs7K0NBQ3BCLHFCQUFxQjs4QkFBRSxJQUFJOzt3Q0FDM0IsY0FBYzs7O0FBR1QsZUFBUztBQVVULGlCQVZBLFNBQVMsQ0FVUixXQUFpQyxFQUFFLFVBQXlCLEVBQUU7OztlQVIxRSxJQUFJLEdBQUcsSUFBSTtlQUNYLFVBQVUsR0FBRyxJQUFJO2VBQ2pCLFFBQVEsR0FBRyxJQUFJO2VBQ2YsT0FBTyxHQUFHLElBQUk7ZUFDZCxtQkFBbUIsR0FBRyxJQUFJO2VBQzFCLG1CQUFtQixHQUFHLElBQUk7O0FBSXhCLGNBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM5Qjs7OEJBYlUsU0FBUzs7aUJBZWpCLGVBQUc7OztBQUNKLGdCQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDNUMsb0JBQUssT0FBTyxHQUFHLElBQUksQ0FBQztBQUNwQixvQkFBSyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCLENBQUMsU0FDTSxDQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQ1osb0JBQUssT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDMUIsQ0FBQyxDQUFDO1dBQ047OztpQkFFTSxpQkFBQyxTQUFTLEVBQUU7QUFDakIsbUJBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUN6Qzs7O3VCQUVBLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQztlQUM5RCxlQUFHOzs7QUFDbEIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQ2xDLGdCQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO0FBQ3pELHFCQUFPLEtBQUssQ0FBQzthQUNkOztBQUdELGdCQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUMzQixtQkFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDN0IsdUJBQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7ZUFDdkMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWOztBQUdELGdCQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUMzQixtQkFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDN0IsdUJBQU8sSUFBSSxDQUFDLFdBQVcsTUFBTSxPQUFLLG1CQUFtQixLQUFLLFdBQVcsQ0FBQSxBQUFDLENBQUM7ZUFDeEUsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWO0FBQ0QsbUJBQU8sS0FBSyxDQUFDO1dBQ2Q7Ozt5QkFsRFUsU0FBUztBQUFULGlCQUFTLEdBRHJCLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FDakMsU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTIiwiZmlsZSI6InRvZG8vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uTWFuYWdlciwgVXNlcn0gZnJvbSAnYXVyZWxpYS1maXJlYmFzZSc7XG5pbXBvcnQge1RvZG9Db2xsZWN0aW9ufSBmcm9tICcuLi9jb2xsZWN0aW9ucy90b2RvJztcblxuQGluamVjdChBdXRoZW50aWNhdGlvbk1hbmFnZXIsIFRvZG9Db2xsZWN0aW9uKVxuZXhwb3J0IGNsYXNzIFRvZG9JbmRleCB7XG4gIC8qZXNsaW50IG5vLXVudXNlZC12YXJzOjAqL1xuICB1c2VyID0gbnVsbDtcbiAgY29sbGVjdGlvbiA9IG51bGw7XG4gIHRvZG9UZXh0ID0gbnVsbDtcbiAgbWVzc2FnZSA9IG51bGw7XG4gIHNlbGVjdGVkU3RhdGVGaWx0ZXIgPSBudWxsO1xuICBzZWxlY3RlZE93bmVyRmlsdGVyID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKGF1dGhNYW5hZ2VyOkF1dGhlbnRpY2F0aW9uTWFuYWdlciwgY29sbGVjdGlvbjpUb2RvQ29sbGVjdGlvbikge1xuICAgIHRoaXMudXNlciA9IGF1dGhNYW5hZ2VyLmN1cnJlbnRVc2VyO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmFkZCh0aGlzLnRvZG9UZXh0KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgICB0aGlzLnRvZG9UZXh0ID0gbnVsbDtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnJvbU5vdyh0aW1lc3RhbXApIHtcbiAgICByZXR1cm4gbW9tZW50LnVuaXgodGltZXN0YW1wKS5mcm9tTm93KCk7XG4gIH1cblxuICBAY29tcHV0ZWRGcm9tKCdjb2xsZWN0aW9uLml0ZW1zJywgJ3NlbGVjdGVkU3RhdGVGaWx0ZXInLCAnc2VsZWN0ZWRPd25lckZpbHRlcicpXG4gIGdldCBmaWx0ZXJlZEl0ZW1zKCkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuY29sbGVjdGlvbi5pdGVtcztcbiAgICBpZighdGhpcy5zZWxlY3RlZFN0YXRlRmlsdGVyICYmICF0aGlzLnNlbGVjdGVkT3duZXJGaWx0ZXIpIHtcbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgYnkgb3duZXJcbiAgICBpZih0aGlzLnNlbGVjdGVkT3duZXJGaWx0ZXIpIHtcbiAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLm93bmVySWQgPT09IHRoaXMudXNlci51aWQ7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgYnkgc3RhdHVzXG4gICAgaWYodGhpcy5zZWxlY3RlZFN0YXRlRmlsdGVyKSB7XG4gICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5pc0NvbXBsZXRlZCA9PT0gKHRoaXMuc2VsZWN0ZWRTdGF0ZUZpbHRlciA9PT0gJ2NvbXBsZXRlZCcpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
