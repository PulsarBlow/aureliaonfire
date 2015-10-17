import 'bootstrap';
import 'nprogress';
import {inject} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import {AuthenticationManager, Configuration} from 'aurelia-firebase';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Firebase';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      {route: ['', 'todo'], name: 'home', moduleId: 'todo/index', nav: true, title: 'Todo List'},
      {route: ['account/signin'], name: 'accountSignin', moduleId: 'account/signin', title: 'Sign in'},
      {route: ['account/signup'], name: 'accountSignup', moduleId: 'account/signup', title: 'Sign up'},
      {
        route: ['account', 'account/index'],
        name: 'accountIndex',
        moduleId: 'account/index',
        title: 'Account',
        auth: true
      },
      {
        route: ['account/edit/email'],
        name: 'accountEditEmail',
        moduleId: 'account/edit_email',
        title: 'Edit email',
        auth: true
      },
      {
        route: ['account/edit/password'],
        name: 'accountEditPassword',
        moduleId: 'account/edit_password',
        title: 'Edit password',
        auth: true
      }
    ]);

    this.router = router;
  }
}

@inject(AuthenticationManager, Configuration) class AuthorizeStep {
  constructor(authManager:AuthenticationManager, config:FirebaseConfig) {
    this.authManager = authManager;
    this.fbConfig = config;
  }

  run(routingContext, next) {
    // Check if the route has an "auth" key
    // Then check if the current authenticated user is valid
    if (routingContext.nextInstructions.some(i => i.config.auth)) {
      if (!this.authManager || !this.authManager.currentUser || !this.authManager.currentUser.isAuthenticated) {
        return next.cancel(new Redirect(this.fbConfig.getLoginRoute()));
      }
    }
    return next();
  }
}
