import { Film } from "../app/interfaces/film";
import { People } from "../app/interfaces/people";
import { Starship } from "../app/interfaces/starship";
import { StarshipsPage } from '../app/interfaces/starships-page';
import { User } from '../app/interfaces/user';

export function returnFakeFilm(info: string = ""): Film {
    return {
        title: "title" + info,
        episode_id: 1,
        opening_crawl: "opening_crawl" + info,
        director: "director" + info,
        producer: "producer" + info,
        release_date: "release_date" + info,
        species: ['species'],
        starships: ['starships'],
        vehicles: ['vehicles'],
        characters: ['characters'],
        planets: ['planets'],
        url: "url" + info,
        created: "created" + info,
        edited: "edited" + info
    }
}

export function returnFakePeople(info: string = ""): People {
    return {
        name: "name" + info,
        birth_year: "birth_year" + info,
        eye_color: "eye_color" + info,
        gender: "gender" + info,
        hair_color: "hair_color" + info,
        height: "height" + info,
        mass: "mass" + info,
        skin_color: "skin_color" + info,
        homeworld: "homeworld" + info,
        films: ['films'],
        species: ['species'],
        starships: ['starships'],
        vehicles: ['vehicles'],
        url: "url" + info,
        created: "created" + info,
        edited: "edited" + info
    }
}

export function returnFakeStarship(info: string = ""): Starship {
    return {
        name: "name" + info,
        model: "model" + info,
        manufacturer: "manufacturer" + info,
        cost_in_credits: "cost_in_credits" + info,
        length: "length" + info,
        max_atmosphering_speed: "max_atmosphering_speed" + info,
        crew: "crew" + info,
        passengers: "passengers" + info,
        cargo_capacity: "cargo_capacity" + info,
        consumables: "consumables" + info,
        hyperdrive_rating: "hyperdrive_rating" + info,
        MGLT: "MGLT" + info,
        starship_class: "starship_class" + info,
        pilots: ['pilots'],
        films: ['films'],
        url: "url" + info,
        created: "created" + info,
        edited: "edited" + info
    }
}

export function returnFakeStarshipsPage(info: number = 15): StarshipsPage {
    return {
        count: info,
        next: "https://api.com/test/3",
        previous: "https://api.com/test/1",
        results: [
            returnFakeStarship("6"),
            returnFakeStarship("7"),
            returnFakeStarship("8"),
            returnFakeStarship("9"),
            returnFakeStarship("10"),
        ]
    }
}

export function returnFakeUser(): User {
    return {
        username: "username",
        email: "usermail",
        password: "userpassword"
    }
}