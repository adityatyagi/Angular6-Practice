import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';




@Component({
  selector: 'app-reactive-forms2',
  templateUrl: './reactive-forms2.component.html',
  styleUrls: ['./reactive-forms2.component.css']
})
export class ReactiveForms2Component implements OnInit {

  // ------------- Class variables and properties ---------------------
  name = new FormControl('');

  // form group example
  profileEditor = new FormGroup({
    firstName: new FormControl(''),
    age: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      address1: new FormControl(''),
      address2: new FormControl(''),
      pincode: new FormControl('')
    })
  });

  // generating the form using form-builder
  collegeForm = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    phoneNumber: [''],
    addressStudent: this.fb.group({
      add1: [''],
      add2: [''],
      code: ['']
    }),
    subjects: this.fb.array([
      this.fb.control('')
    ])
  });

  // to get the form array controls
  get subjects() {
    return this.collegeForm.get('subjects') as FormArray;
  }


  // --------------- Functions / Methods -----------------------

  updateName() {
    this.name.setValue('Prinky');
  }

  // submit profile editor form
  onSubmit() {
    console.log(this.profileEditor.value);
  }

  // update the entire form
  updateAll() {
    this.profileEditor.setValue({
      firstName: 'Rohan',
      lastName: 'Bhatia',
      age: '33',
      address: {
        address1: 'PQRS 2',
        address2: 'Moti Nagar',
        pincode: '110099'
      }
    });
  }

  // update only the address
  updateAddress() {
    this.profileEditor.patchValue({
      address: {
        pincode: '222222'
      }
    });
  }

  // submitting college form - form builder
  onCollegeFormSubmit() {
    alert('Thank You');
    console.warn(this.collegeForm.value);
  }

  // dynamically insert a FormControl instance
  addSubject() {
    this.subjects.push(this.fb.control(''));
  }


  // -------------------- Constructor and ngOnInit --------------------
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
