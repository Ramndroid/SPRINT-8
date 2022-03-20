import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSubNavBarComponent } from './banner-sub-nav-bar.component';

describe('BannerSubNavBarComponent', () => {
  let component: BannerSubNavBarComponent;
  let fixture: ComponentFixture<BannerSubNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSubNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSubNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
