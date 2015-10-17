import {inject} from 'aurelia-framework';
import {AuthenticationManager} from 'aurelia-firebase';

@inject(AuthenticationManager)
export class Account {

  newEmail = null;
  newPassword =  null;
  password = null;

  constructor(authManager: AuthenticationManager) {
    this.authManager = authManager;
  }

  update() {

  }
}
