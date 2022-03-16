import { Injectable } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  starships: Starship[] = [];

  constructor(
    private apiService: ApiService
  ) {
    this.getStarshipsPage();
  }

  getStarshipsPage() {
    this.apiService.getStarshipsPage()
      .subscribe(starshipsPage => {
        this.starships = [...starshipsPage.results];
        // console.log(starshipsPage);
        // console.table(this.starships);
      });
  }
}
