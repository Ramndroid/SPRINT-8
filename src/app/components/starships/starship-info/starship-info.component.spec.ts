import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipsService } from 'src/app/services/starships/starships.service';
import { StarshipsTestingService } from 'src/testing/starships-testing-service';
import { StarshipInfoComponent } from './starship-info.component';


describe('StarshipInfoComponent', () => {
  let fixture: ComponentFixture<StarshipInfoComponent>;
  let component: StarshipInfoComponent;
  let service: StarshipsService;


  beforeEach(waitForAsync(() => {


    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [StarshipInfoComponent],
      providers: [
        { provide: StarshipsService, useClass: StarshipsTestingService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StarshipsService);
  });

  it('should be Description like "Lorem ipsum dolo"', () => {
    spyOn(service, 'getDescription$').and.callThrough();
    component.subscribeDescription();
    expect(component.description).toBe("Lorem ipsum dolo");
  });

  it('should be Pilots with length 4', () => {
    spyOn(service, 'getPilots$').and.callThrough();
    component.subscribePilots();
    expect(component.pilots.length).toBe(4);
  });

  it('isLoaded should be true after load resource', () => {
    expect(component.isLoaded).toBeTrue();
  });

  it('isImgLoading should be false after load resource', () => {
    component.onImageLoaded();
    expect(component.isImgLoading).toBeFalse();
  });

  it('isDescriptionLoading should be false after load resource', () => {
    expect(component.isDescriptionLoading).toBeFalse();
  });

  it('isPilotsLoading should be false after load resource', () => {
    expect(component.isPilotsLoading).toBeFalse();
  });

});
