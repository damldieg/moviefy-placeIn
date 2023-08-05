import { MovieHTTPRepository } from "../../data/repositories/MoviesHTTPRepository";
import { ListedMovie } from "../models/ListedMovie";
import { MovieDetails } from "../models/MovieDetails";
import { RatedMovie } from "../models/RatedMovie";
import { IMovies } from "./IMovies";

export class Movies implements IMovies {
    private moviesHTTPRepository = new MovieHTTPRepository();

    async getAll(): Promise<ListedMovie[]> {
        const nowPlayingMovies = await this.moviesHTTPRepository.getNowPlayingMovies()
        const popularMovies = await this.moviesHTTPRepository.getPopularMovies()
        const topRatedMovies = await this.moviesHTTPRepository.getTopRatedMovies()
        const upcomingMovies = await this.moviesHTTPRepository.getUpcomingMovies()

        return [...nowPlayingMovies, ...popularMovies, ...topRatedMovies, ...upcomingMovies]
    }

    async searchMovie(query: string): Promise<ListedMovie[]> {
        const result = await this.moviesHTTPRepository.getMovieByQuery(query)

        return result
    }

    async getById(id: number): Promise<MovieDetails> {
        const movie = await this.moviesHTTPRepository.getMovieById(id)

        return movie
    }

    rateMovie(stars: number, comments: string, movie: MovieDetails): RatedMovie {
        return {
            ...movie,
            stars,
            comments
        }
    }
}