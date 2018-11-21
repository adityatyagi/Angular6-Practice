import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUploadsComponent } from './recent-uploads.component';

describe('RecentUploadsComponent', () => {
  let component: RecentUploadsComponent;
  let fixture: ComponentFixture<RecentUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
