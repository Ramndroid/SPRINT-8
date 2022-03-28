import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { StarshipsPage } from '../../interfaces/starships-page';
import { ApiTestingService } from '../../../testing/api-testing-service';
import { returnFakeStarshipsPage } from '../../../testing/testing-tools';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ApiService, useClass: ApiTestingService }
      ]
      
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('be able to retrieve starships by page', () => {
    const testStarshipsPage: StarshipsPage = returnFakeStarshipsPage(1);

    service.getStarshipsByPage(1).subscribe(starshipPage => {
      expect(starshipPage.count).toEqual(testStarshipsPage.count);
      console.log(starshipPage);
      console.log(testStarshipsPage);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });


});
