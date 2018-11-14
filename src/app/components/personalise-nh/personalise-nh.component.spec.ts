import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaliseNhComponent } from './personalise-nh.component';

describe('PersonaliseNhComponent', () => {
  let component: PersonaliseNhComponent;
  let fixture: ComponentFixture<PersonaliseNhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaliseNhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaliseNhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
