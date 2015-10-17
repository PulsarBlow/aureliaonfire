import {inject} from 'aurelia-framework';
import {AuthenticationManager} from 'aurelia-firebase';

@inject(AuthenticationManager)
export class AccountEditPassword {
  authManager = null;
  oldPassword = null;
  newPassword = null;
  confirmNewPassword = null;
  message = null;
  error = null;

  constructor(authManager) {
    this.authManager = authManager;
  }

  edit() {
    if (!this.newPassword) {
      this.error = 'New password is required';
      return;
    }

    if (this.newPassword !== this.confirmNewPassword) {
      this.error = 'Password confirmation is different';
      this.confirmNewPassword = null;
      return;
    }

    if (!this.oldPassword) {
      this.error = 'Old password is required';
      return;
    }

    this.error = null;
    this.message = null;
    this.authManager.changePassword(this.authManager.currentUser.email, this.oldPassword, this.newPassword).then(() => {
      this.message = 'Password changed!';
    }, (error) => {
      this.error = error.message;
    }).then(() => {
      this.oldPassword = null;
      this.newPassword = null;
      this.confirmNewPassword = null;
    });
  }
}
