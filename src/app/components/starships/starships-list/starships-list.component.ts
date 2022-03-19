import { StarshipsService } from './../../../services/starships/starships.service';
import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship';


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starships: Starship[];


  constructor(
    private starshipsService: StarshipsService
  ) { 
    this.starships = [];
  }

  ngOnInit(): void {
    this.getPagesOfStarships();
  }

  onScroll(): void {
    this.getPagesOfStarships();
  }

  private getPagesOfStarships() {
    this.starshipsService.getStarshipsByPage();    
    this.starships = this.starshipsService.getStarships;
  }

  getStarshipID(url: string): string {
    return this.starshipsService.extractStarshipID(url);
  }

}
