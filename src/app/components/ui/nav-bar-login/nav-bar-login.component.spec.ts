import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from 'src/app/services/users/users.service';

import { NavBarLoginComponent } from './nav-bar-login.component';
import { UsersTestingService } from '../../../../testing/users-testing-service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavBarLoginComponent', () => {
  let fixture: ComponentFixture<NavBarLoginComponent>;
  let component: NavBarLoginComponent;
  let service: UsersService;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync(() => {

    dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [NavBarLoginComponent],
      providers: [
        { provide: UsersService, useClass: UsersTestingService },
        { provide: MatDialog, useValue: dialogSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UsersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open modal log user', () => {
    component.openLogInDialog();
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('open modal new user', () => {
    component.openSignUpDialog();
    expect(dialogSpy.open).toHaveBeenCalled();
  });
});
