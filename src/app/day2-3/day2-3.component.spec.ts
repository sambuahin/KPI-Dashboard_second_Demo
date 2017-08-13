import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day23Component } from './day2-3.component';

describe('Day23Component', () => {
  let component: Day23Component;
  let fixture: ComponentFixture<Day23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
