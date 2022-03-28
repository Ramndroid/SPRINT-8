import { StarshipsService } from './../../../services/starships/starships.service';
import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html'
})
export class StarshipsListComponent implements OnInit {

  starships: Starship[];

  constructor(
    private starshipsService: StarshipsService
  ) {
    this.starships = [];
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getPagesOfStarships();
    this.starships = this.starshipsService.getStarships;
  }

  onScroll(): void {
    this.getPagesOfStarships();
  }

  private getPagesOfStarships(): void {
    this.starshipsService.getStarshipsByPage();
  }

  getStarshipID(url: string): string {
    return this.starshipsService.extractStarshipID(url);
  }

}
