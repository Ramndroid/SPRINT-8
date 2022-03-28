import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from './services/users/users.service';

import { UserGuard } from './user.guard';

describe('UserGuard', () => {
  let guard: UserGuard;
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      providers: [UsersService]
    });
    guard = TestBed.inject(UserGuard);
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
