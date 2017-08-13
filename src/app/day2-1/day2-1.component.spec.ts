import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day21Component } from './day2-1.component';

describe('Day21Component', () => {
  let component: Day21Component;
  let fixture: ComponentFixture<Day21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
