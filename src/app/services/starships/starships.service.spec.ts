import { TestBed } from '@angular/core/testing';
import { StarshipsService } from './starships.service';
import { ApiService } from '../api/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { ApiTestingService } from 'src/testing/api-testing-service';


describe('StarshipsService', () => {
  let service: StarshipsService;
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ApiService, useClass: ApiTestingService }
      ]
    });
    service = TestBed.inject(StarshipsService);
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
