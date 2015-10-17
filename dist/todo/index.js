System.register(['aurelia-framework', 'aurelia-firebase', '../collections/todo'], function (_export) {
  'use strict';

  var inject, AuthenticationManager, User, TodoCollection, TodoIndex;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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

          this.user = authManager.currentUser;
          this.collection = collection;
        }

        _createClass(TodoIndex, [{
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
        }]);

        var _TodoIndex = TodoIndex;
        TodoIndex = inject(AuthenticationManager, TodoCollection)(TodoIndex) || TodoIndex;
        return TodoIndex;
      })();

      _export('TodoIndex', TodoIndex);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJEQUthLFNBQVM7Ozs7Ozs7O2lDQUxkLE1BQU07OytDQUNOLHFCQUFxQjs4QkFBRSxJQUFJOzt3Q0FDM0IsY0FBYzs7O0FBR1QsZUFBUztBQVFULGlCQVJBLFNBQVMsQ0FRUixXQUFpQyxFQUFFLFVBQXlCLEVBQUU7OztlQU4xRSxJQUFJLEdBQUcsSUFBSTtlQUNYLFVBQVUsR0FBRyxJQUFJO2VBQ2pCLFFBQVEsR0FBRyxJQUFJO2VBQ2YsT0FBTyxHQUFHLElBQUk7O0FBSVosY0FBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO0FBQ3BDLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzlCOztxQkFYVSxTQUFTOztpQkFhakIsZUFBRzs7O0FBQ0osZ0JBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUM1QyxvQkFBSyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLG9CQUFLLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEIsQ0FBQyxTQUNNLENBQUMsVUFBQyxDQUFDLEVBQUs7QUFDWixvQkFBSyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMxQixDQUFDLENBQUM7V0FDTjs7O2lCQUVNLGlCQUFDLFNBQVMsRUFBRTtBQUNqQixtQkFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1dBQ3pDOzs7eUJBekJVLFNBQVM7QUFBVCxpQkFBUyxHQURyQixNQUFNLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQ2pDLFNBQVMsS0FBVCxTQUFTO2VBQVQsU0FBUyIsImZpbGUiOiJ0b2RvL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25NYW5hZ2VyLCBVc2VyfSBmcm9tICdhdXJlbGlhLWZpcmViYXNlJztcbmltcG9ydCB7VG9kb0NvbGxlY3Rpb259IGZyb20gJy4uL2NvbGxlY3Rpb25zL3RvZG8nO1xuXG5AaW5qZWN0KEF1dGhlbnRpY2F0aW9uTWFuYWdlciwgVG9kb0NvbGxlY3Rpb24pXG5leHBvcnQgY2xhc3MgVG9kb0luZGV4IHtcbiAgLyplc2xpbnQgbm8tdW51c2VkLXZhcnM6MCovXG4gIHVzZXIgPSBudWxsO1xuICBjb2xsZWN0aW9uID0gbnVsbDtcbiAgdG9kb1RleHQgPSBudWxsO1xuICBtZXNzYWdlID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKGF1dGhNYW5hZ2VyOkF1dGhlbnRpY2F0aW9uTWFuYWdlciwgY29sbGVjdGlvbjpUb2RvQ29sbGVjdGlvbikge1xuICAgIHRoaXMudXNlciA9IGF1dGhNYW5hZ2VyLmN1cnJlbnRVc2VyO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmFkZCh0aGlzLnRvZG9UZXh0KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgICB0aGlzLnRvZG9UZXh0ID0gbnVsbDtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnJvbU5vdyh0aW1lc3RhbXApIHtcbiAgICByZXR1cm4gbW9tZW50LnVuaXgodGltZXN0YW1wKS5mcm9tTm93KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
