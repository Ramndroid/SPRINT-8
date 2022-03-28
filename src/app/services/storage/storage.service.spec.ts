import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { StorageTestinggService } from '../../../testing/storage-testing-service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: StorageService, useClass: StorageTestinggService }
      ]
    });
    service = TestBed.inject(StorageService);
  });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
