import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-heroes',
  templateUrl: './our-heroes.component.html',
  styleUrls: ['./our-heroes.component.css']
})
export class OurHeroesComponent implements OnInit {
  // highlight directive
  color: string;

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
