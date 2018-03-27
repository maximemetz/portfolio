import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeillejComponent } from './veillej.component';

describe('VeillejComponent', () => {
  let component: VeillejComponent;
  let fixture: ComponentFixture<VeillejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeillejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeillejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
