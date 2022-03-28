import { Observable, of, Subject } from "rxjs";
import { Starship } from "../app/interfaces/starship";
import { returnFakeStarship } from 'src/testing/testing-tools';
import { People } from "../app/interfaces/people";
import { returnFakePeople } from 'src/testing/testing-tools';
import { returnFakeStarshipsPage, returnFakeFilm } from './testing-tools';
import { StarshipsPage } from "../app/interfaces/starships-page";
import { Film } from "../app/interfaces/film";

export class ApiTestingService {

    extractStarshipID(url: string): string {
        return url;
    }

    extractStarshipPage(url: string): string {
        return url;
    }

    extractPilotID(url: string): string {
        return url;
    }

    getStarshipsByPage(page: number): Observable<StarshipsPage> {
        return of(returnFakeStarshipsPage(page));
    }

    getStarshipByID(id: string): Observable<Starship> {
        return of(returnFakeStarship(id));
    }

    getFilm(url: string): Observable<Film> {
        return of(returnFakeFilm(url));
    }

    getPeopleInfo(url: string): Observable<People> {
        return of(returnFakePeople(url));
    }
}