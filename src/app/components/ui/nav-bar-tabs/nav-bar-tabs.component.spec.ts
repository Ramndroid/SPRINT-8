import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarTabsComponent } from './nav-bar-tabs.component';

describe('NavBarTabsComponent', () => {
  let component: NavBarTabsComponent;
  let fixture: ComponentFixture<NavBarTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
