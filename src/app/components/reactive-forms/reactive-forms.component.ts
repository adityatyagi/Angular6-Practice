import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  // instance of FormControl
  // setting the initial valeue to '' -> empty string
  //  you get immediate access to listen for, update, and validate the state of the form input.
  nameControl = new FormControl('');

  // FormGroup Example
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  changeName() {
    this.nameControl.setValue('Aditya');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
