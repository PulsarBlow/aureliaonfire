import {inject} from 'aurelia-framework';
import {AuthenticationManager, User} from 'aurelia-firebase';
import {TodoCollection} from '../collections/todo';

@inject(AuthenticationManager, TodoCollection)
export class TodoIndex {
  /*eslint no-unused-vars:0*/
  user = null;
  collection = null;
  todoText = null;
  message = null;


  constructor(authManager:AuthenticationManager, collection:TodoCollection) {
    this.user = authManager.currentUser;
    this.collection = collection;
  }

  add() {
    this.collection.add(this.todoText).then(() => {
      this.message = null;
      this.todoText = null;
    })
      .catch((e) => {
        this.message = e.message;
      });
  }

  fromNow(timestamp) {
    return moment.unix(timestamp).fromNow();
  }
}
