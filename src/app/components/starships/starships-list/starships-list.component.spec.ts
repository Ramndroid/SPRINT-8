import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StarshipsListComponent } from './starships-list.component';
import { StarshipsService } from '../../../services/starships/starships.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StarshipsListComponent', () => {
  let component: StarshipsListComponent;
  let fixture: ComponentFixture<StarshipsListComponent>;
  // let service: StarshipsService;
  // let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StarshipsListComponent],
      providers: [
        StarshipsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // service = TestBed.inject(StarshipsService);
    // httpMock = TestBed.inject(HttpTestingController);
  });

  it('El componente se debe instanciar', () => {
    spyOn(component.starshipsService, 'getStarshipsByPage').and.callThrough();
    component.onScroll();
    console.log(component.starshipsService.getStarships.length)
    expect(component.starships.length).toBe(0);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('the starships array must start with length 0', () => {
  //   expect(component.starships.length).toBe(0);
  // });

  // it('the onScroll method should update the starships array', () => {
  //   // expect(component.starships.length).toBe(0);
  //   // expect(service.getStarshipsByPage()).toBeDefined;
  //   // component.starships = service.getStarships;
  //   // console.log(component.starships.length);
  //   // expect(component.starships.length).toBe(10);
  //   expect(fixture.componentInstance.starships.length).toBe(0);
  //   expect(service.getStarshipsByPage()).toBeDefined;
  //   fixture.componentInstance.starships = service.getStarships;
  //   console.log(fixture.componentInstance.starships.length);
  //   expect(fixture.componentInstance.starships.length).toBe(10);
  // });

  // it('El componente se debe instanciar', () => {
  //   expect(component).toBeDefined();
  //   expect(component).toBeInstanceOf(StarshipsListComponent);
  // });

});
