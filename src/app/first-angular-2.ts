import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CoursesComponent} from './courses.components';


@Component({
  selector: 'first-angular-2-app',
  providers: [],
  templateUrl: 'app/first-angular-2.html',
  template:'<courses></courses>',
  directives: [CoursesComponent],
  pipes: []
})
@RouteConfig([

])
export class FirstAngular2App {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
