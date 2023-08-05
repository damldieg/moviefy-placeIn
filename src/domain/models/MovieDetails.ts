import { ListedMovie } from "./ListedMovie";

export interface MovieDetails extends ListedMovie {
    genres: string[]
    overview: string
    runtime: number
    tagline: string
    productionCompanies: string[]
}