import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipsService } from 'src/app/services/starships/starships.service';

import { StarshipInfoComponent } from './starship-info.component';

describe('StarshipInfoComponent', () => {
  let component: StarshipInfoComponent;
  let fixture: ComponentFixture<StarshipInfoComponent>;
  let service: StarshipsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ StarshipInfoComponent ],
      providers: [StarshipsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StarshipsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
