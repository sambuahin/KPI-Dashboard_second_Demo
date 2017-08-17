import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day61Component } from './day6-1.component';

describe('Day61Component', () => {
  let component: Day61Component;
  let fixture: ComponentFixture<Day61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
