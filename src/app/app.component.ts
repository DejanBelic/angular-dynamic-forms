import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-dynamic-forms';
  person = {
    firstName: {
    label: 'Firstname',
      value: 'Dejan',
      type: 'text'
    },
    age: {
      label: 'Age',
      value: 32,
      type: 'number'
    },
  };
}
