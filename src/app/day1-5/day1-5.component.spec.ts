import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15Component } from './day1-5.component';

describe('Day15Component', () => {
  let component: Day15Component;
  let fixture: ComponentFixture<Day15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
