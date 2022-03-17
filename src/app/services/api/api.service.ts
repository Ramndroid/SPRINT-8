import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarshipsPage } from '../../interfaces/starships-page';
import { Starship } from 'src/app/interfaces/starship';
import { Film } from 'src/app/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private isUsingMainURL: boolean;

  private mainURL: string = 'https://swapi.dev/api';

  private mainURLAlt: string = 'https://swapi.py4e.com/api';

  private endPointStarships: string = '/starships/';

  constructor(
    private http: HttpClient
  ) {
    // TODO: implementar un método que determine cual es la mejor API según si funciona bien
    // o si va muy lenta.
    this.isUsingMainURL = false;
  }

  private getEndPointStarshipsInMainURL(): string {
    if (this.isUsingMainURL)
      return `${this.mainURL}${this.endPointStarships}`;
    else
      return `${this.mainURLAlt}${this.endPointStarships}`;
  }

  extractStarshipID(url: string): string {
    let regex: RegExp;
    
    if (this.isUsingMainURL)
      regex = /https\:\/\/swapi\.dev\/api\/starships\/(\d+)\//;
    else
      regex = /https\:\/\/swapi\.py4e\.com\/api\/starships\/(\d+)\//;

    const id = url.match(regex)![1];
    return id;
  }

  getStarshipsPage(): Observable<StarshipsPage> {
    const path = this.getEndPointStarshipsInMainURL();
    return this.http.get<StarshipsPage>(path);
  }

  getStarshipByID(id: string): Observable<Starship> {
    const path = `${this.getEndPointStarshipsInMainURL()}/${id}`;
    return this.http.get<Starship>(path);
  }

  getFilm(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }

}
