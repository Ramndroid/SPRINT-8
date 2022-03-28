import { Starship } from './starship';

export interface StarshipsPage {
    count: number,
    next: string,
    previous: string,
    results: Starship[]
}
