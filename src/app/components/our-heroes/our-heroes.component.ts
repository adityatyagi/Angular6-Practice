import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/shared/pipes/heroes';

@Component({
  selector: 'app-our-heroes',
  templateUrl: './our-heroes.component.html',
  styleUrls: ['./our-heroes.component.css']
})
export class OurHeroesComponent implements OnInit {
  condition: any;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  // highlight directive
  color: string;


  // pipes - Filter heroes that can fly and the ones who cant
  heros: any = [];
  canFly = false;

  constructor() {
    this.reset();
   }

  ngOnInit() {
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  flyingStatus() {
    this.canFly = !this.canFly;
  }
  // add hero
  addHero2(name: string) {
    // trim the extra spaces before and after the name
    name = name.trim();

    if (!name) {
      return false;
    } else {
      const hero = {
        name,
        canFly: this.canFly
      };
      console.log('hero', hero);
      this.heros.push(hero);
    }

  }
  reset() {
    this.heros = HEROES.slice();
  }


}
