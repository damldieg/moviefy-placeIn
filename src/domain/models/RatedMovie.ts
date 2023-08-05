import { MovieDetails } from "./MovieDetails";

export interface RatedMovie extends MovieDetails {
    comments: string
    stars: number
}