import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarshipsPage } from '../../interfaces/starships-page';
import { ApiURLS } from './api-urls';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrls: ApiURLS = new ApiURLS();

  constructor(
    private http: HttpClient
  ) { }

  getStarshipsPage(): Observable<StarshipsPage> {
    const path = this.apiUrls.getEndPointStarshipsInMainURL(false);
    return this.http.get<StarshipsPage>(path);
  }

  
}
