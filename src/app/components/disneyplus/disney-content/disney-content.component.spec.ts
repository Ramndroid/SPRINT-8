import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyContentComponent } from './disney-content.component';

describe('DisneyContentComponent', () => {
  let component: DisneyContentComponent;
  let fixture: ComponentFixture<DisneyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisneyContentComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
