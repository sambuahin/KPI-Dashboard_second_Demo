import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day22Component } from './day2-2.component';

describe('Day22Component', () => {
  let component: Day22Component;
  let fixture: ComponentFixture<Day22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
