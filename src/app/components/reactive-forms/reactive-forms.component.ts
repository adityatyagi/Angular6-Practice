import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

// if you dont know the number of child elements in advance - Form Arrays - add FormControl to elements dynamically
import { FormArray } from '@angular/forms';
import { identityRevealedValidator } from 'src/app/shared/identity-revealed.directive';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  // powers
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    // hero form
    heroForm = new FormGroup({
      'name': new FormControl(),
      'alterEgo': new FormControl(),
      'power': new FormControl()
    }, {validators: identityRevealedValidator});

    get name() {
      return this.heroForm.get('name');
    }

    get alterEgo() {
      return this.heroForm.get('alterEgo');
    }

    get power() {
      return this.heroForm.get('power');
    }

  // instance of FormControl
  // setting the initial valeue to '' -> empty string
  //  you get immediate access to listen for, update, and validate the state of the form input.
  nameControl = new FormControl('');

  // profileForm
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      pincode: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  // -- getters for the form values ---
  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get street() {
    return this.profileForm.get('street');
  }

  get city() {
    return this.profileForm.get('city');
  }

  get pincode() {
    return this.profileForm.get('pincode');
  }

  // get aliases property of profileForm
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  // add alias - add another field, i.e FormControl instance
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    alert('Thank you for submitting the form');
    console.log('Profile Form: ', this.profileForm.value);
  }

  onSubmitHero(formValue) {
    console.log('formValue', formValue);
  }

  newHero() {
    alert('Creating new hero');
  }

  constructor(private fb: FormBuilder) {

    // bringing the values of the form from the db and displaying them
    this.heroForm.setValue({
      name: 'Aditya',
      alterEgo: 'Sanju Metha',
      power: 'Super Flexible'
    });
  }

  ngOnInit() {
  }

  // ---------------- FUNCTIONS --------------------------



  changeName() {
    this.nameControl.setValue('Aditya');
  }



  // update form values
  // updateForm() {
  //   this.profileForm.patchValue({
  //     firstName: 'Sarthak',
  //     address: {
  //       city: 'Banglore'
  //     }
  //   });
  // }

    // Profile Example - using native classes FormGroup and FormControl
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pincode: new FormControl('')
  //   })
  // });


  // Profile Form: using the form builder
  // profileForm2 = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     pincode: ['']
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });

  // get aliases() {
  //   return this.profileForm2.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

}
