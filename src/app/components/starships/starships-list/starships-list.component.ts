import { StarshipsService } from './../../../services/starships/starships.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html'
})
export class StarshipsListComponent implements OnInit, OnDestroy {

  starships: Starship[];

  // private starships$: Subscription;

  isLoaded: boolean;


  constructor(
    public starshipsService: StarshipsService
  ) {
    this.starships = [];
    // this.starships$ = new Subscription;
    this.isLoaded = true;
    console.log("StarshipsListComponent constructor");
    // this.starships = this.starshipsService.getStarships;
    // this.starshipsService.init();
  }

  ngOnDestroy(): void {
    // this.starships$.unsubscribe();
    // this.starshipsService.onDestroy();
    // this.starshipsService.init();
  }

  ngOnInit(): void {
    console.log("StarshipsListComponent ngOnInit");
    window.scroll(0, 0);
    this.getPagesOfStarships();
    // this.starships$ = this.starshipsService.getStarships$()
    //   .subscribe(
    //     (_) => {
    //       // this.starships = [...starships];
    //       this.isLoaded = true;
    //       // console.log("ngOnInit subscirbe list");
          
    //     }
    //   );

      this.starships = this.starshipsService.getStarships;
  }

  onScroll(): void {
    this.getPagesOfStarships();
  }

  private getPagesOfStarships(): void {
    this.starshipsService.getStarshipsByPage();
    // this.starships = this.starshipsService.getStarships;
  }

  getStarshipID(url: string): string {
    return this.starshipsService.extractStarshipID(url);
  }

}
