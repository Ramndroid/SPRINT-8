import { NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpeningComponent } from './opening.component';

describe('OpeningComponent', () => {
  let component: OpeningComponent;
  let fixture: ComponentFixture<OpeningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2],
      declarations: [OpeningComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the episode index should be 0 when starting the component', () => {
    expect(component.indexEpisode).toBe(0);
  });

  it('load episode', () => {
    component.loadEpisode(0);
    expect(component.intro).toBe("A long time ago in a galaxy far, far away...");

    component.loadEpisode(9);
    expect(component.intro).toBe("Ha arribat, s'acosta el final de curs i de la mentoria...");
  });
});
