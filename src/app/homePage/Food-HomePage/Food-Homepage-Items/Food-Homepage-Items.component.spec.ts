/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodHomepageItemsComponent } from './Food-Homepage-Items.component';

describe('FoodHomepageItemsComponent', () => {
  let component: FoodHomepageItemsComponent;
  let fixture: ComponentFixture<FoodHomepageItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHomepageItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHomepageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
