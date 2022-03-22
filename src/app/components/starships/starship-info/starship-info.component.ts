import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Starship } from 'src/app/interfaces/starship';
import { StarshipsService } from 'src/app/services/starships/starships.service';

@Component({
  selector: 'app-starship-info',
  templateUrl: './starship-info.component.html'
})
export class StarshipInfoComponent implements OnInit, OnDestroy {

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
    window.scrollTo(0, 0);
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
