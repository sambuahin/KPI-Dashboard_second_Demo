import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day24Component } from './day2-4.component';

describe('Day24Component', () => {
  let component: Day24Component;
  let fixture: ComponentFixture<Day24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
