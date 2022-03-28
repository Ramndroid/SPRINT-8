import { Observable, of, Subject } from "rxjs";
import { Starship } from "../app/interfaces/starship";
import { returnFakeStarship } from 'src/testing/testing-tools';
import { People } from "../app/interfaces/people";
import { returnFakePeople } from 'src/testing/testing-tools';

export class StarshipsTestingService {

    public starships: Starship[];

    constructor(
    ) {
        this.starships = [];
    }

    get getStarships() {
        return this.starships;
    }

    getStarships$(): Observable<Starship[]> {
        return of([
            returnFakeStarship("1"),
            returnFakeStarship("2"),
            returnFakeStarship("3"),
            returnFakeStarship("4")
        ]);
    }

    getStarship$(): Observable<Starship> {
        return of(returnFakeStarship());
    }

    getDescription$(): Observable<string> {
        return of("Lorem ipsum dolo");
    }

    getPilots$(): Observable<People[]> {
        return of([
            returnFakePeople("1"),
            returnFakePeople("2"),
            returnFakePeople("3"),
            returnFakePeople("4"),
        ]);
    }

    getEmptyStarship(): Starship {
        const starship: Starship = returnFakeStarship();
        return starship;
    }

    extractStarshipID(url: string): string {
        return url;
    }

    extractPilotID(url: string): string {
        let regex: RegExp  = /https\:\/\/swapi\.py4e\.com\/api\/people\/(\d+)\//;

        const id = url.match(regex)![1];
        return id;
    }

    init() {
        this.starships = [];
    }

    getStarshipsByPage(): void {
        for (let i = 1; i < 5; i++) {
            this.starships.push(returnFakeStarship(i.toString()));
        }
    }

    getStarshipByID(id: string): void {
        console.log(returnFakeStarship(id));
    }
}