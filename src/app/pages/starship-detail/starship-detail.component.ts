import { StarshipsService } from '../../services/starships/starships.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from '../../interfaces/starship';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html'
})
export class StarshipDetailComponent implements OnInit, OnDestroy {

  id: string;

  starship: Starship;

  description: string;

  private starship$: Subscription;

  private description$: Subscription;

  constructor(
    private starshipsService: StarshipsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.starship = this.starshipsService.getEmptyStarship();
    this.description = "";
    this.starship$ = new Subscription;
    this.description$ = new Subscription;
  }

  ngOnInit(): void {
    this.starshipsService.getStarshipByID(this.id);

    this.starship$ = this.starshipsService.getStarship$()
      .subscribe(
        (starship: Starship) => {
          this.starship = starship;
        }
      );

    this.description$ = this.starshipsService.getDescription$()
      .subscribe(
        (description: string) => {
          this.description = description;
        }
      );
  }

  ngOnDestroy(): void {
    this.starship$.unsubscribe();
    this.description$.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['starships']);
  }


}
