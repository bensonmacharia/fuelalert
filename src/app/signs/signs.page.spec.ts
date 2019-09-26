import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignsPage } from './signs.page';

describe('AboutPage', () => {
  let component: SignsPage;
  let fixture: ComponentFixture<SignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
