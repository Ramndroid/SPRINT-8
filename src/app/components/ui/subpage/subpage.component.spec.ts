import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SubpageComponent } from './subpage.component';

describe('SubpageComponent', () => {
  let component: SubpageComponent;
  let fixture: ComponentFixture<SubpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SubpageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('obtains claim with random < 0.5', () => {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(component.claim.endsWith("disney+")).toBeTrue();
  });

  it('obtains claim with random > 0.5', () => {
    spyOn(Math, 'random').and.returnValue(0.6);
    expect(component.claim.endsWith("disney+")).toBeTrue();
  });
  it('obtains claim with random == 0.5', () => {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(component.claim.endsWith("disney+")).toBeTrue();
  });
});
