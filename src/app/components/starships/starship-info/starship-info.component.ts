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

  isLoaded: boolean;

  isImgLoading: boolean;

  isDescriptionLoading: boolean;

  isPilotsLoading: boolean;

  private starship$: Subscription;

  private description$: Subscription;

  private pilots$: Subscription;  

  constructor(
    private starshipsService: StarshipsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.starship = this.starshipsService.getEmptyStarship();
    this.description = "";
    this.pilots = [];
    this.isLoaded = false;
    this.isImgLoading = true;
    this.isDescriptionLoading = true;
    this.isPilotsLoading = true;
    this.starship$ = new Subscription;
    this.description$ = new Subscription;
    this.pilots$ = new Subscription;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.starshipsService.getStarshipByID(this.id);

    this.starship$ = this.starshipsService.getStarship$()
      .subscribe(
        (starship: Starship) => {
          this.starship = starship;
          this.isLoaded = true;
          if (this.starship.url != '') {
            this.suscribeDescriptionAndPilots();
            console.log("pilots", starship.pilots)
            console.log("url", starship.url)
          }
        }
      );
  }

  private suscribeDescriptionAndPilots(): void {
    this.description$ = this.starshipsService.getDescription$()
      .subscribe(
        (description: string) => {
          this.description = description;
          this.isDescriptionLoading = false;
        }
      );

    this.pilots$ = this.starshipsService.getPilots$()
      .subscribe(
        (pilots: People[]) => {
          this.pilots = [...pilots];
          console.log("legth pilots", this.pilots.length);
          this.isPilotsLoading = false;
        }
      );
  }

  ngOnDestroy(): void {
    this.starship$.unsubscribe();
    if (this.starship.url != '') {
      this.description$.unsubscribe();
      this.pilots$.unsubscribe();
    }

    this.isLoaded = false;
    this.isImgLoading = true;
    this.isDescriptionLoading = true;
    this.isPilotsLoading = true;
  }

  onImageLoaded() {
    this.isImgLoading = false;
  }

  goBack(): void {
    this.router.navigate(['starships']);
  }
}
