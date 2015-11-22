import {inject, computedFrom} from 'aurelia-framework';
import {AuthenticationManager, User} from 'aurelia-firebase';
import {TodoCollection} from '../collections/todo';

@inject(AuthenticationManager, TodoCollection)
export class TodoIndex {
  /*eslint no-unused-vars:0*/
  user = null;
  collection = null;
  todoText = null;
  message = null;
  selectedStateFilter = null;
  selectedOwnerFilter = null;


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

  @computedFrom('collection.items', 'selectedStateFilter', 'selectedOwnerFilter')
  get filteredItems() {
    let items = this.collection.items;
    if(!this.selectedStateFilter && !this.selectedOwnerFilter) {
      return items;
    }

    // Filter by owner
    if(this.selectedOwnerFilter) {
      items = items.filter((item) => {
        return item.ownerId === this.user.uid;
      }, this);
    }

    // Filter by status
    if(this.selectedStateFilter) {
      items = items.filter((item) => {
        return item.isCompleted === (this.selectedStateFilter === 'completed');
      }, this);
    }
    return items;
  }
}
