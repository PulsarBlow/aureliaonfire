import 'moment';
import {inject, computedFrom} from 'aurelia-framework';
import {ReactiveCollection, AuthenticationManager} from 'aurelia-firebase';

@inject(AuthenticationManager)
export class TodoCollection extends ReactiveCollection {
  _user = null;

  constructor(authManager:AuthenticationManager) {
    super('todos');
    this._user = authManager.currentUser;
  }

  @computedFrom('items')
  get orderedItems() {
    console.log('ordering');
    return this.items.sort((item1, item2) => {
      if(item1.timestamp < item2.timestamp) {
        return -1;
      }
      if(item2.timestamp > item2.timestamp) {
        return 1;
      }
      return 0;
    });
  }
  add(text:String) {
    if (!this._user || !this._user.isAuthenticated) {
      return Promise.reject({message: 'Authentication is required'});
    }
    if (!text) {
      return Promise.reject({message: 'A Todo message is required'});
    }

    return super.add({
      ownerId: this._user.uid,
      ownerProfileImageUrl: this._user.profileImageUrl,
      text: text,
      timestamp: Math.floor(Date.now() / 1000),
      isCompleted: false
    });
  }
}
