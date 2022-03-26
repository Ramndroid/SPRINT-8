import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipsService } from 'src/app/services/starships/starships.service';

import { PilotsComponent } from './pilots.component';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;
  let service: StarshipsService;
  let httpMock: HttpTestingController;

   beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PilotsComponent ],
      providers: [StarshipsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StarshipsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('El componente se debe instanciar', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(PilotsComponent);
  });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ PilotsComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(PilotsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should have as idPilots', () => {
  //   expect(component.idPilot).toBeTruthy();
  // });

  it('should have as pilots', () => {
    expect(component.pilots).toBeTruthy();
  });

  it('should have getPilotID(url: string)', () => {
    expect(component.getPilotID).toBeTruthy();
  });

});
