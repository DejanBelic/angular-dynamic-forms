import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form">
      <div *ngFor="let prop of personProps">
        <input type="text" [formControlName]="prop">
      </div>
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
   person = {
    name: 'Dejan',
    age: '32',
     hobbie: 'collector',
     twitter: 'dejanbelic'
  };
   personProps = [];
  constructor() { }

  ngOnInit(): void {
    const formDataOb = {};
    for (const prop of Object.keys(this.person)) {
      formDataOb[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataOb);
  }

}
