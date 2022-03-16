export class ApiURLS {

    private mainURL: string = 'https://swapi.dev/api';

    private mainURLAlt: string = 'https://swapi.py4e.com/api';

    private starshipImageURL: string = 'https://starwars-visualguide.com/assets/img/starships/';

    private endPointStarships: string = '/starships/';

    constructor() { }

    getEndPointStarshipsInMainURL(isMainURL: boolean): string {
        if (isMainURL)
            return `${this.mainURL}${this.endPointStarships}`;
        else
            return `${this.mainURLAlt}${this.endPointStarships}`;
    }
}