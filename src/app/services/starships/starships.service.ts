import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Starship } from '../../interfaces/starship';
import { Film } from 'src/app/interfaces/film';
import { StarshipsPage } from '../../interfaces/starships-page';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private starships: Starship[];

  private page: number;

  private starship$: Subject<Starship>;

  private description$: Subject<string>;

  constructor(
    private apiService: ApiService
  ) {
    this.starships = [];
    this.page = 1;
    this.starship$ = new Subject();
    this.description$ = new Subject();
  }

  get getStarships(): Starship[] {
    return this.starships;
  }

  getStarship$(): Observable<Starship> {
    return this.starship$.asObservable();
  }

  getDescription$(): Observable<string> {
    return this.description$.asObservable();
  }

  getEmptyStarship(): Starship {
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

  extractStarshipID(url: string): string {
    return this.apiService.extractStarshipID(url);
  }

  getStarshipsByPage(): void {
    if (this.page !== -1) {
      this.apiService.getStarshipsByPage(this.page)
        .subscribe(
          (starshipsPage: StarshipsPage) => {

            const nextPage = starshipsPage.next;

            if (nextPage !== null)
              this.page = parseInt(this.extractStarshipPage(nextPage));
            else
              this.page = -1;

            this.addStarshipToArray(starshipsPage);
          }
        );
    }
  }

  private extractStarshipPage(url: string): string {
    return this.apiService.extractStarshipPage(url);
  }

  private addStarshipToArray(resp: StarshipsPage) {
    const starships: Starship[] = resp.results;
    this.appendStarships(starships);
  }

  private appendStarships(starshipsToAppend: Starship[]) {
    for (const starship of starshipsToAppend) {
      this.starships.push(starship);
    }
  }

  getStarshipByID(id: string): void {
    this.apiService.getStarshipByID(id)
      .subscribe(
        (starship: Starship) => {
          this.starship$.next(starship);
          this.getFilmsOfStarship(starship.films);
        }
      );
  }

  private getFilmsOfStarship(films: string[]): void {
    const filmsLength = films.length;
    if (filmsLength > 0) {
      const random = this.getRandomEpisodeCrawl(filmsLength);
      const film = films[random];
      this.getFilmOpeningCrawlAsStarshipDescription(film);
    }
  }

  private getRandomEpisodeCrawl(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private getFilmOpeningCrawlAsStarshipDescription(urlFilm: string): void {
    this.apiService.getFilm(urlFilm)
      .subscribe(
        (film: Film) => {
          const description = `${film.opening_crawl} [Episode ${film.episode_id}]`;
          this.description$.next(description);
        }
      );
  }

}
