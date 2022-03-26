import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { StarshipsPage } from '../../interfaces/starships-page';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('be able to retrieve starships by page', () => {
    const testStarshipsPage: StarshipsPage = {
      count: 4,
      next: "https://api.com/pages/3",
      previous: "https://api.com/pages/2",
      results: [
        {
          name: "name",
          model: "model",
          manufacturer: "manufacturer",
          cost_in_credits: "cost_in_credits",
          length: "length",
          max_atmosphering_speed: "1max_atmosphering_speed",
          crew: "crew",
          passengers: "passengers",
          cargo_capacity: "cargo_capacity",
          consumables: "consumables",
          hyperdrive_rating: "hyperdrive_rating",
          MGLT: "MGLT",
          starship_class: "starship_class",
          pilots: [
            "pilots"
          ],
          films: [
            "films"
          ],
          created: "created",
          edited: "edited",
          url: "url"
        }
      ]
    };

    service.getStarshipsByPage(1).subscribe(starshipPage => {
      expect(starshipPage).toEqual(testStarshipsPage);
    });

    const request = httpMock.expectOne("https://swapi.py4e.com/api/starships/?page=1");
    expect(request.request.method).toBe('GET');
    request.flush(testStarshipsPage);
    

  });

  afterEach(() => {
    httpMock.verify();
  });


});
