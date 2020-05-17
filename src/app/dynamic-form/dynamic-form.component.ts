import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form">
      <div *ngFor="let prop of personProps">
        <label>{{ prop.label }}</label>
        <div [ngSwitch]="prop.type">
          <input *ngSwitchCase="'text'" type="{{prop.type}}" [formControlName]="prop.key">
          <input *ngSwitchCase="'number'" type="{{prop.type}}" [formControlName]="prop.key">
          <select *ngSwitchCase="'select'" [formControlName]="prop.key">
            <option *ngFor="let option of prop.options" [value]="option.value">{{ option.label }}</option>
          </select>
        </div>
      </div>
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  @Input() formData;
   personProps = [];
  constructor() { }

  ngOnInit(): void {
    const formDataOb = {};
    for (const prop of Object.keys(this.formData)) {
      formDataOb[prop] = new FormControl(this.formData[prop].value);
      this.personProps.push({
        key: prop,
        label: this.formData[prop].label,
        type: this.formData[prop].type,
        options: this.formData[prop].options
      });
    }
    this.form = new FormGroup(formDataOb);
  }

}
