import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form">
      <input type="text" [formControlName]="fieldName">
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  fieldName = 'age';
  fieldValue = '32';
  constructor() { }

  ngOnInit(): void {
  this.form = new FormGroup({
    [this.fieldName]: new FormControl(this.fieldValue)
  });
  }

}
