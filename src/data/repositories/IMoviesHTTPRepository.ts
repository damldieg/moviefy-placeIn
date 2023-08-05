import { ListedMovie } from "../../domain/models/ListedMovie";
import { MovieDetails } from "../../domain/models/MovieDetails";

export interface IMoviesHTTPRepository {
    getNowPlayingMovies(): Promise<ListedMovie[]>
    getTopRatedMovies(): Promise<ListedMovie[]>
    getPopularMovies(): Promise<ListedMovie[]>
    getUpcomingMovies(): Promise<ListedMovie[]>
    getMovieByQuery(query: string): Promise<ListedMovie[]>
    getMovieById(id: number): Promise<MovieDetails>
}