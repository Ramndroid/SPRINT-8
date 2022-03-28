import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UsersService } from 'src/app/services/users/users.service';

import { UserDialogComponent } from './user-dialog.component';
import { UsersTestingService } from '../../../../testing/users-testing-service';
import { User } from 'src/app/interfaces/user';

describe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let fixture: ComponentFixture<UserDialogComponent>;
  let service: UsersService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserDialogComponent],
      providers: [
        { provide: UsersService, useClass: UsersTestingService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UsersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('obtains user logged', () => {
    spyOn(service, 'getUserLoged').and.callThrough();
    expect(component).toBeTruthy();
    const user: User = {
      username: component.username,
      email: component.email,
      password: component.passw
    }
    expect(user.username).toBe("username");

  });
});
