import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Starship } from '../../interfaces/starship';
import { Film } from 'src/app/interfaces/film';
import { StarshipsPage } from '../../interfaces/starships-page';
import { Subject, Observable } from 'rxjs';
import { People } from 'src/app/interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private starships: Starship[];

  private page: number;

  private starship$: Subject<Starship>;

  private description$: Subject<string>;

  private pilots: People[];

  private pilots$: Subject<People[]>;

  constructor(
    private apiService: ApiService
  ) {
    this.starships = [];
    this.page = 1;
    this.starship$ = new Subject();
    this.description$ = new Subject();
    this.pilots = [];
    this.pilots$ = new Subject();
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

  getPilots$(): Observable<People[]> {
    return this.pilots$.asObservable();
  }

  getEmptyStarship(): Starship {
    return {
      name: "", model: "", manufacturer: "", cost_in_credits: "",
      length: "", max_atmosphering_speed: "", crew: "", passengers: "",
      cargo_capacity: "", consumables: "", hyperdrive_rating: "", MGLT: "",
      starship_class: "", pilots: [], films: [], created: "", edited: "", url: ""
    };
  }

  extractStarshipID(url: string): string {
    return this.apiService.extractStarshipID(url);
  }

  extractPilotID(url: string): string {
    return this.apiService.extractPilotID(url);
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

  getStarshipByID(id: string): void {
    this.apiService.getStarshipByID(id)
      .subscribe(
        (starship: Starship) => {
          this.starship$.next(starship);
          this.getFilmsOfStarship(starship.films);
          this.getPilotsOfStarship(starship.pilots);
        }
      );
  }

  clearPilots() {
    this.pilots = [];
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

  private getPilotsOfStarship(pilots: string[]) {
    const pilotsLength = pilots.length;
    if (pilotsLength > 0) {
      pilots.forEach(pilot => this.getPilot(pilot));
    }
  }

  private getPilot(pilot: string) {
    this.apiService.getPeopleInfo(pilot)
      .subscribe(
        (people: People) => {
          this.pilots.push(people);
          const sortedPilots = [...this.sortPilotsAlphabet(this.pilots)];
          this.pilots$.next(sortedPilots);
          // this.pilots$.next(this.pilots);
        }
      );
  }

  private sortPilotsAlphabet(pilots: People[]): People[] {
    const result = pilots.sort((a, b) => {
      if (a.name === "" || a.name === null) return 1;
      if (b.name === "" || b.name === null) return -1;
      if (a.name.toLocaleLowerCase() === b.name.toLocaleLowerCase()) return 0;
      return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
    })
    return result;
  }
}
