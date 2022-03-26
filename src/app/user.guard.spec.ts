import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from './services/users/users.service';

import { UserGuard } from './user.guard';

describe('UserGuard', () => {
  let guard: UserGuard;
  // let router: Router;
  let service: UsersService;
  // let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      providers: [UsersService]
    });
    guard = TestBed.inject(UserGuard);
    // router = TestBed.inject(Router);
    service = TestBed.inject(UsersService);
    // dialog = TestBed.inject(MatDialog);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
