import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Starship } from '../../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  starships: Starship[] = [];

  starship: Starship;

  description: string;

  constructor(
    private apiService: ApiService
  ) {
    this.getStarshipsPage();
    this.starship = this.defaultStarship();
    this.description = "";
  }

  private defaultStarship(): Starship {
    return {
      name: "",
      model: "",
      manufacturer: "",
      cost_in_credits: "",
      length: "",
      max_atmosphering_speed: "",
      crew: "",
      passengers: "",
      cargo_capacity: "",
      consumables: "",
      hyperdrive_rating: "",
      MGLT: "",
      starship_class: "",
      pilots: [],
      films: [],
      created: "",
      edited: "",
      url: ""
    };
  }

  getStarshipsPage(): void {
    this.apiService.getStarshipsPage()
      .subscribe(starshipsPage => {
        // TODO: modificar para paginación
        this.starships = [...starshipsPage.results];
      });
  }

  getStarshipByID(id: string): void {
    this.apiService.getStarshipByID(id)
      .subscribe(starship => {
        this.starship = starship;

        let film: string = "";
        const filmsLength = starship.films.length;
        if (filmsLength > 0) {
          const random = Math.floor(Math.random() * filmsLength );
          film = starship.films[random];
          this.getFilmOpeningCrawlAsStarshipDescription(film);
        }        
      });
  }

  private getFilmOpeningCrawlAsStarshipDescription(film: string): void {
    this.apiService.getFilm(film)
      .subscribe(film => {
        this.description = `${film.opening_crawl} [Episode ${film.episode_id}]`;
      });
  }

  extractStarshipID(url: string): string {
    return this.apiService.extractStarshipID(url);
  }

  goBack(): void {
    this.starship = this.defaultStarship();
    this.description = "";
  }
}
