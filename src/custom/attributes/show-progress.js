import {inject, customAttribute} from 'aurelia-framework';
import NProgress from 'nprogress';

@customAttribute('show-progress')
@inject(Element)
export class ShowProgress {
  constructor(element) {
    this.element = element;
    NProgress.configure({showSpinner: false});
  }

  valueChanged(newValue) {
    if (newValue) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }
}
