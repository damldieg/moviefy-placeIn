import { ListedMovie } from "../models/ListedMovie";
import { MovieDetails } from "../models/MovieDetails";
import { RatedMovie } from "../models/RatedMovie";

export interface IMovies {
    getAll(): Promise<ListedMovie[]>
    getById(id: number): Promise<MovieDetails>
    searchMovie(query: string): Promise<ListedMovie[] | ListedMovie>
    rateMovie(stars: number, comments: string, movieId: MovieDetails): RatedMovie
}