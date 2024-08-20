/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterTourDataComponent } from './filter-tour-data.component';

describe('FilterTourDataComponent', () => {
  let component: FilterTourDataComponent;
  let fixture: ComponentFixture<FilterTourDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTourDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTourDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
