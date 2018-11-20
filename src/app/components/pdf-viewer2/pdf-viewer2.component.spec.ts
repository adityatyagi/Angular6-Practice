import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewer2Component } from './pdf-viewer2.component';

describe('PdfViewer2Component', () => {
  let component: PdfViewer2Component;
  let fixture: ComponentFixture<PdfViewer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
