import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E6Component } from './e6.component';

describe('E6Component', () => {
  let component: E6Component;
  let fixture: ComponentFixture<E6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
