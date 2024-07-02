/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodHomepageTitleComponent } from './Food-Homepage-Title.component';

describe('FoodHomepageTitleComponent', () => {
  let component: FoodHomepageTitleComponent;
  let fixture: ComponentFixture<FoodHomepageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHomepageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHomepageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
