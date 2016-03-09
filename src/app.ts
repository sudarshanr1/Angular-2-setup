import {bootstrap} from 'angular2/platform/browser';
import {FirstAngular2App} from './app/first-angular-2';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(FirstAngular2App, [
  ROUTER_PROVIDERS
]);
