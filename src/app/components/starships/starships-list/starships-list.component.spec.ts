import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StarshipsListComponent } from './starships-list.component';
import { StarshipsService } from '../../../services/starships/starships.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StarshipsTestingService } from 'src/testing/starships-testing-service';

describe('StarshipsListComponent', () => {
  let component: StarshipsListComponent;
  let fixture: ComponentFixture<StarshipsListComponent>;
  let service: StarshipsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StarshipsListComponent],
      providers: [
        { provide: StarshipsService, useClass: StarshipsTestingService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StarshipsService);
  });

  it('onScroll loads four starships', () => {
    spyOn(service, 'getStarshipsByPage').and.callThrough();
    service.init();
    component.onScroll();
    component.starships = service.getStarships;
    expect(component.starships.length).toBe(4);
  });


});
