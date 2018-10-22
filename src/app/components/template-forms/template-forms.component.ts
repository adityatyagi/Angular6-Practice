/*
 1. two-way data binding,
 2. change tracking,
 3. validation, and
 4. error handling
*/
import { Component, OnInit } from '@angular/core';

// importing Hero model defination
import { Hero } from '../hero';




@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  // this Hero instance is directly used in the input field -> [(ngModel)]='model.name' or [(ngModel)]='model.id'
  model = new Hero(18, 'Aditya', this.powers[0], 'Sanju Metha');

  // inital form submit status
  submitted = false;

  onSubmit() {
    this.submitted = true;
    alert('Form Submited');
    // form data
    console.log();
  }

  // TODO: Remove this later
  // diagnostic is a variable that can be used in the view {{diagnostic}}
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  // create a new hero
  newHero() {
    this.model = new Hero(42, '', '');
    console.log('New Hero: ', this.model);
  }

  constructor() { }

  ngOnInit() {
  }

}
