/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HotelTitleComponent } from './hotel-title.component';

describe('HotelTitleComponent', () => {
  let component: HotelTitleComponent;
  let fixture: ComponentFixture<HotelTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
