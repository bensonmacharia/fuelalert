import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedPage } from './reported.page';

describe('AboutPage', () => {
  let component: ReportedPage;
  let fixture: ComponentFixture<ReportedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportedPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
