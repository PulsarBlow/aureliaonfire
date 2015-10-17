import {inject} from 'aurelia-framework';
import {AuthenticationManager} from 'aurelia-firebase';

@inject(AuthenticationManager)
export class AccountEditEmail {
  authManager = null;
  newEmail = null;
  password = null;
  message = null;
  error = null;

  constructor(authManager) {
    this.authManager = authManager;
  }

  edit() {
    if (!this.newEmail) {
      this.error = 'New email is required';
      return;
    }
    if (!this.password) {
      this.error = 'Password is required';
      return;
    }

    this.error = null;
    this.message = null;
    this.authManager.changeEmail(this.authManager.currentUser.email, this.password, this.newEmail).then(() => {
      this.authManager.currentUser.email = this.newEmail;
      this.message = 'Email changed!';
    }, (error) => {
      this.error = error.message;
    }).then(() => {
      this.newEmail = null;
      this.password = null;
    });
  }
}
