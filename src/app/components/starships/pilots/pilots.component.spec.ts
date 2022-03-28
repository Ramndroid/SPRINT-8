import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipsService } from 'src/app/services/starships/starships.service';
import { StarshipsTestingService } from 'src/testing/starships-testing-service';

import { PilotsComponent } from './pilots.component';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;
  let service: StarshipsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PilotsComponent],
      providers: [
        { provide: StarshipsService, useClass: StarshipsTestingService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StarshipsService);
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('El componente se debe instanciar', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(PilotsComponent);
  });

  it('should have as pilots', () => {
    expect(component.pilots).toBeTruthy();
  });

  it('should have getPilotID(url: string)', () => {
    spyOn(service, 'extractPilotID').and.callThrough();
    const fakeResult = component.getPilotID("https://swapi.py4e.com/api/people/9/");
    console.log("fakeresponse", fakeResult);
    expect(fakeResult).toBe("9");
  });

  it('onImageLoaded turns isImgLoading to false', () => {
    component.onImageLoaded();
    expect(component.isImgLoading).toBeFalse();
  });

});
