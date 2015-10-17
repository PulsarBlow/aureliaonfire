import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthenticationManager} from 'aurelia-firebase';

@inject(AuthenticationManager, Router)
export class SignIn {
  email = null;
  password = null;
  message = null;

  constructor(authManager:AuthenticationManager, router:Router) {
    this.authManager = authManager;
    this.router = router;
  }

  signIn() {
    this.message = null;
    this.authManager.signIn(this.email, this.password)
      .then(() => {
        this.router.navigateToRoute('accountIndex');
      })
      .catch((e) => {
        this.message = e.message;
      });
  }
}
