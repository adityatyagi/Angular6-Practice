import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHeroesComponent } from './our-heroes.component';

describe('OurHeroesComponent', () => {
  let component: OurHeroesComponent;
  let fixture: ComponentFixture<OurHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
