import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const ALTER_EGOS = ['Eric', 'Sanju Metha'];

@Injectable({ providedIn: 'root' })
export class HeroesService {
  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = ALTER_EGOS.includes(alterEgo);
    console.log('isTaken', isTaken);
    return of(isTaken).pipe(delay(400));
  }
}
