import { API_KEY, API_URL, API_URL_SEARCH } from "../../constants/apiURL";
import { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } from "../../constants/movieCategory";
import { ListedMovie } from "../../domain/models/ListedMovie";
import { MovieDetails } from "../../domain/models/MovieDetails";
import { get } from "../../services/api";
import { MovieDetailsAPIResponse, MoviesAPIResponse } from "../../types/MoviesAPI";
import { listedMoviesAdapter } from "../adapters/listedMovies.adapter";
import { movieDetailsAdapter } from "../adapters/movieDetails.adapter";
import { IMoviesHTTPRepository } from "./IMoviesHTTPRepository";

const Tags = {
    [NOW_PLAYING]: 'Now playing',
    [POPULAR]: 'Popular',
    [TOP_RATED]: 'Top rated',
    [UPCOMING]: 'Upcoming'
}
export class MovieHTTPRepository implements IMoviesHTTPRepository {
    async getNowPlayingMovies(): Promise<ListedMovie[]> {
        const response = await get<MoviesAPIResponse>(`${API_URL}${NOW_PLAYING}?api_key=${API_KEY}`);

        return listedMoviesAdapter(response, Tags[NOW_PLAYING])
    }
    
    async getPopularMovies(): Promise<ListedMovie[]> {
        const response = await get<MoviesAPIResponse>(`${API_URL}${POPULAR}?api_key=${API_KEY}`);

        return listedMoviesAdapter(response, Tags[POPULAR])
    }
    
    async getTopRatedMovies(): Promise<ListedMovie[]> {
        const response = await get<MoviesAPIResponse>(`${API_URL}${TOP_RATED}?api_key=${API_KEY}`);

        return listedMoviesAdapter(response, Tags[TOP_RATED])
    }
    
    async getUpcomingMovies(): Promise<ListedMovie[]> {
        const response = await get<MoviesAPIResponse>(`${API_URL}${UPCOMING}?api_key=${API_KEY}`);

        return listedMoviesAdapter(response, Tags[UPCOMING])
    }

    async getMovieByQuery(query: string): Promise<ListedMovie[]> {
        const response = await get<MoviesAPIResponse>(`${API_URL_SEARCH}?api_key=${API_KEY}&query=${query}`);

        return listedMoviesAdapter(response)
    }

    async getMovieById(id: string): Promise<MovieDetails> {
        const response = await get<MovieDetailsAPIResponse>(`${API_URL}${id}?api_key=${API_KEY}`)

        return movieDetailsAdapter(response)
    }
}