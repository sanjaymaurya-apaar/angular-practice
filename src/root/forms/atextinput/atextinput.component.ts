import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

function validateMyName() {
  return absValidated;
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('validation data: ', control.value);
    return {
      validateMyName: { value: control.value, validation: 'failed' },
    };
  };
}

function absValidated(control: AbstractControl): ValidationErrors | null {
  return null;
}

@Component({
  selector: 'app-atextinput',
  templateUrl: './atextinput.component.html',
  styleUrls: ['./atextinput.component.css'],
})
export class AtextinputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  yourdata: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    validateMyName(),
  ]);

  checkform() {
    console.log(this.yourdata);
  }
}
