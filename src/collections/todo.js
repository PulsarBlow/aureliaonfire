import 'moment';
import {inject} from 'aurelia-framework';
import {ReactiveCollection, AuthenticationManager} from 'aurelia-firebase';

@inject(AuthenticationManager)
export class TodoCollection extends ReactiveCollection {
  _user = null;

  constructor(authManager:AuthenticationManager) {
    super('todos');
    this._user = authManager.currentUser;
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
      timestamp: moment().utc().unix(),
      isCompleted: false
    });
  }
}
