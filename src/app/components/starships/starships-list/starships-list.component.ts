import { StarshipsService } from './../../../services/starships/starships.service';
import { Component } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent {

  constructor(
    private starshipsService: StarshipsService
  ) { }

  getStarships(): Starship[] {
    return this.starshipsService.starships;
  }
  getStarshipID(url: string): string {
    return this.starshipsService.extractStarshipID(url);
  }

}
