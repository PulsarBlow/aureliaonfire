import {inject, customElement} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthenticationManager, User} from 'aurelia-firebase';

@customElement('identity')
@inject(AuthenticationManager, Router)
export class Identity {

  constructor(authManager: AuthenticationManager, router: Router) {
    this.authManager = authManager;
    /*eslint no-unused-vars:0*/
    this.user = authManager.currentUser;
    this.router = router;
  }

  signOut() {
    this.authManager.signOut().then(() => {
      this.router.navigateToRoute('home');
    });
  }
}
