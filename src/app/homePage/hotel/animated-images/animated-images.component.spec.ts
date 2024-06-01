/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnimatedImagesComponent } from './animated-images.component';

describe('AnimatedImagesComponent', () => {
  let component: AnimatedImagesComponent;
  let fixture: ComponentFixture<AnimatedImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
