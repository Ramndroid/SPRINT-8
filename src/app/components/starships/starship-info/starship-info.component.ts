import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Starship } from 'src/app/interfaces/starship';
import { StarshipsService } from 'src/app/services/starships/starships.service';
import { People } from '../../../interfaces/people';

@Component({
  selector: 'app-starship-info',
  templateUrl: './starship-info.component.html'
})
export class StarshipInfoComponent implements OnInit, OnDestroy {

  id: string;

  starship: Starship;

  description: string;

  pilots: People[];

  private starship$: Subscription;

  private description$: Subscription;

  private pilots$: Subscription;

  isLoaded: boolean;

  constructor(
    private starshipsService: StarshipsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.starship = this.starshipsService.getEmptyStarship();
    this.description = "";
    this.pilots = [];
    this.starship$ = new Subscription;
    this.description$ = new Subscription;
    this.pilots$ = new Subscription;
    this.isLoaded = false;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.starshipsService.getStarshipByID(this.id);

    this.starship$ = this.starshipsService.getStarship$()
      .subscribe(
        (starship: Starship) => {
          this.starship = starship;
          this.isLoaded = true;
        }
      );

    this.description$ = this.starshipsService.getDescription$()
      .subscribe(
        (description: string) => {
          this.description = description;
        }
      );

    this.pilots$ = this.starshipsService.getPilots$()
      .subscribe(
        (pilots: People[]) => {
          this.pilots = [...pilots];
        }
      );
  }

  ngOnDestroy(): void {
    this.starship$.unsubscribe();
    this.description$.unsubscribe();
    this.pilots$.unsubscribe();
    this.starshipsService.clearPilots();
    this.isLoaded = false;
  }

  goBack(): void {
    this.router.navigate(['starships']);
  }
}
