import { Component } from '@angular/core';

/*
  Generated class for the DateToday component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'date-today',
  templateUrl: 'date-today.html'
})
export class DateToday {

  text: string;
  today : Date = new Date();

  constructor() {
  }

}
