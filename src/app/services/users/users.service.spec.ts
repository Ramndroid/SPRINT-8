import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { UsersTestingService } from '../../../testing/users-testing-service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UsersService, useClass: UsersTestingService }
      ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
